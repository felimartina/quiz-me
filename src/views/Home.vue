<template>
  <div class="home mt-3">
    <b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-brand href="#">Quiz Me</b-navbar-brand>
  <div>
<amplify-sign-out class="text-right"></amplify-sign-out>
  </div>
    

</b-navbar>
    <b-row>
      <b-col>
         <amplify-sign-out></amplify-sign-out>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="3" >
        <mq-layout mq="laptop+">
          <quiz-session-history @quizSessionSelected="onQuizSessionSelected"/>
        </mq-layout>
      </b-col>
      <b-col xl="6">
        <quiz-session :session="currentSession"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizSession from '@/components/QuizSession.vue'
import QuizSessionHistory from '@/components/QuizSessionHistory.vue'
import { QuizSessionService } from '@/services'

export default {
  name: 'home',
  components: {
    QuizSession,
    QuizSessionHistory
  },
  data: function() {
    return {
      currentSession: null
    }
  },
  mounted: async function() {
    this.currentSession = QuizSessionService.getLastQuizSession()
    if (!this.currentSession) {
      this.currentSession = await QuizSessionService.createQuizSession(
        this.questionsInSession
      )
      QuizSessionService.saveQuizSession(this.currentSession)
    }
  },
  methods: {
    onQuizSessionSelected: function(quizSession) {
      this.currentSession = quizSession
    }
  }
}
</script>
