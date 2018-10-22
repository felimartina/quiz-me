<template>
  <div class="admin-edit-question">
    <edit-question></edit-question>
  </div>
</template>

<script>
import EditQuestion from '@/components/EditQuestion.vue'

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
			this.currentSession = await QuizSessionService.createQuizSession(this.questionsInSession)
			QuizSessionService.saveQuizSession(this.currentSession)
		}
	},
	methods: {
		onQuizSessionSelected: function(quizSession){
			this.currentSession = quizSession
		}
	}
}
</script>
