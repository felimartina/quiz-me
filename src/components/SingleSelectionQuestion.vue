<template>
  <div class="question" v-if="question">
    <b-card class="mb-2">
      <b-row>
        <b-col align-h="center">
          <b-alert v-for="(warning, index) in question.warnings" :key="index" show variant="warning">{{ warning }}</b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="card-text">
            {{ question.question }}
          </p>
          <b-form>
            <b-form-group v-for="(option, index) in question.options" :key="option.id" :disabled="question.answered">
              <b-form-radio-group :id="question.id" v-model="selectedAnswer" :name="question.id" stacked :disabled="question.answered">
                <b-form-radio :value="option.id" >
                  <span :style="question.answered && !option.isCorrectAnswer ? 'text-decoration: line-through;' : ''" >{{option.description}}</span>
                  <strong><span :class="option.isCorrectAnswer ? 'text-success' : 'text-danger'" v-if="question.answered && option.explanation">&nbsp;{{ option.explanation }}</span></strong>
                  </b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-form>
          <div>
            <h6>
              <b-badge v-for="(tag, index) in question.tags" :key="index" class="mr-1 ml-1">
                {{ tag }}</b-badge>
            </h6>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4" class="text-center">
          <div v-if="question.answered">
            <font-awesome-icon v-if="this.question.answeredCorrectly" class="text-success" icon="check-circle" size="3x"/>
            <font-awesome-icon v-else class="text-danger" icon="times-circle" size="3x"/>
          </div>
          <div v-if="!question.answered">
            <b-button variant="success" :disabled="selectedAnswer === null" @click="answer()">Answer</b-button>
          </div>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { Api } from "@/services"
import Vue from 'vue'
import Question from "@/models/Question"

export default {
  name: "Question",
  data: function() {
    return {
      selectedAnswer: null
    };
  },
  props: {
    question: Question,
  },
  computed: {
  },
  methods: {
    answer: function() {
      Vue.set(this.question, 'answered', true)
      Vue.set(this.question, 'selectedAnswers', [this.selectedAnswer])
      Vue.set(this.question, 'answeredCorrectly', this.question.answers[0] === this.selectedAnswer)
      this.$emit('answered', this.question)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
