<template>
  <div>
    <b-row>
      <b-col class="text-center">
        <h2> Your Quizes </h2>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col class="text-right">
        <b-btn variant="primary" v-b-modal.modalNewQuiz>Start New</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <QuizSessionListItem v-for="(quizSession, index) in quizSessions" :key="index"
                             :quizSession="quizSession" @quizSessionSelected="handleQuizSessionSelected" @quizSessionDeleted="handleQuizSessionDeleted"></QuizSessionListItem>
      </b-col>
    </b-row>
    <b-modal id="modalNewQuiz" ref="modal" title="Start a new Quiz" hide-footer>
      <CreateNewQuiz @quizSessionCreated="handleQuizSessionCreated" @quizCreationCancelled="handleQuizCreationCancelled"></CreateNewQuiz>
    </b-modal>
  </div>
</template>

<script>
import { QuizSessionService } from '@/services/'
import QuizSessionListItem from '@/components/QuizSessionListItem'
import CreateNewQuiz from '@/components/CreateNewQuiz'


export default {
  name: "QuizSessionHistory",
  components: {
    QuizSessionListItem,
    CreateNewQuiz
  },
  data: function() {
    return {
      quizSessions: []
    }
  },
  mounted: function() {
    this.quizSessions = QuizSessionService.getQuizSessions()
  }, 
  methods: {
    handleQuizSessionSelected (quizSession) {
       this.$emit('quizSessionSelected', quizSession)
    },
    handleQuizSessionDeleted (deletedQuizSession) {
      this.quizSessions = this.quizSessions.filter(qs => qs.id !== deletedQuizSession.id)
    },
    handleQuizSessionCreated (newQuizSession) {
      QuizSessionService.saveQuizSession(newQuizSession)
      this.quizSessions = [newQuizSession, ...this.quizSessions]
      this.$emit('quizSessionSelected', newQuizSession)
      this.$refs.modal.hide()
    },
    handleQuizCreationCancelled () {
      this.$refs.modal.hide()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
