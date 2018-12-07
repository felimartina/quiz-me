<template>
  <div class="session" v-if="session">
    <b-row>
      <b-col class="text-center">
        <h2> Question {{ this.session.currentQuestionIndex + 1 }} </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-pagination align="center"
                      :total-rows="session.questions.length"
                      :value="this.session.currentQuestionIndex + 1"
                      :per-page="1"
                      :limit="10"
                      prev-text="Previous"
                      next-text="Next"
                      @change="changeQuestion"
        ></b-pagination>
      </b-col>
    </b-row>
    <b-row class="mt-1" v-if="progress">
      <b-col>
        <b-progress :max="session.questions.length" striped animated>
          <b-progress-bar variant="success" :value="progress.answeredCorrectly">
            <strong>{{ Math.floor((progress.answeredCorrectly / session.questions.length) * 100) }}%</strong>
          </b-progress-bar>
          <b-progress-bar variant="danger" :value="progress.notAnsweredCorrectly">
            <strong>{{ Math.floor((progress.notAnsweredCorrectly / session.questions.length) * 100) }}%</strong>
          </b-progress-bar>
          <b-progress-bar variant="secondary" :value="progress.unanswered"></b-progress-bar>
        </b-progress>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <SingleSelectionQuestion v-if="isSingleChoice" :question="currentQuestion" @answered="onAnswered" @nextQuestion="next()" @previousQuestion="back()"></SingleSelectionQuestion>
        <MultipleSelectionQuestion v-else :question="currentQuestion" @answered="onAnswered" @nextQuestion="next()" @previousQuestion="back()"></MultipleSelectionQuestion>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Api } from "@/services"
import { QuestionTypeConstants, QuizSessionService } from '@/services'
import { QuizSession } from '@/models'
import MultipleSelectionQuestion from "@/components/MultipleSelectionQuestion"
import SingleSelectionQuestion from "@/components/SingleSelectionQuestion"
import Vue from 'vue'

export default {
  name: "QuizSession",
  components: {
    SingleSelectionQuestion,
    MultipleSelectionQuestion
  },
  data: function() {
    return {
      progress: null,
      percentageCorrectAnsweres: 0, 
      percentageWrongAnsweres: 0
    };
  },
  props: {
    session: QuizSession
  },
  watch: { 
    session: function(newVal, oldVal) {
      this.refreshProgress()
    }
  },
  computed: {
    currentQuestion() {
      return this.session ? this.session.questions[this.session.currentQuestionIndex] : null
    },
    isSingleChoice() {
      return this.currentQuestion ? this.currentQuestion.type === QuestionTypeConstants.SINGLE_SELECTION : false
    }
  },
  methods: {
    next() {
      Vue.set(this.session, 'currentQuestionIndex', this.session.currentQuestionIndex + 1)
    },
    back() {
      Vue.set(this.session, 'currentQuestionIndex', this.session.currentQuestionIndex - 1)
    },
    changeQuestion(page){
      Vue.set(this.session, 'currentQuestionIndex', page - 1)
    },
    onAnswered() {
      this.refreshProgress()
      QuizSessionService.saveQuizSession(this.session)
    },
    refreshProgress() {
      this.progress = this.session.getResults()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
