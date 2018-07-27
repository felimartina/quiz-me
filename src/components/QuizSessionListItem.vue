<template>
	<div>
		<b-card class="m-1 p-1">
			<b-row>
				<b-col cols="8">
					<span >{{ quizSession.startedOn | moment("MMMM Do YYYY @ HH:mm") }}</span>
				</b-col>
				<b-col cols="4" class="text-right">
					<a href="#" @click="deleteQuizSession"><font-awesome-icon class="mr-1 text-danger" icon="trash-alt"/></a>
					<b-button variant="success" size="sm" @click="openQuizSession">
						<span v-if="progress.unanswered !== 0">Continue</span>
						<span v-else>Review</span>
					</b-button>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-progress :max="questionsInSession" striped class="mt-1">
						<b-progress-bar variant="success" :value="progress.answeredCorrectly"></b-progress-bar>
						<b-progress-bar variant="danger" :value="progress.notAnsweredCorrectly"></b-progress-bar>
						<b-progress-bar variant="secondary" :value="progress.unanswered"></b-progress-bar>
					</b-progress>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
import QuizSession from "@/models/QuizSession"
import { QuizSessionService } from '@/services/'

export default {
  name: "QuizSessionListItem",
  props: {
		quizSession: QuizSession
	},
	computed: {
		progress() {
			return this.quizSession.getResults()
		},
		questionsInSession() {
			return this.quizSession.questions.length
		}
	},
	methods: {
		openQuizSession() {
			this.$emit('quizSessionSelected', this.quizSession)
		},
		deleteQuizSession() {
			QuizSessionService.deleteQuizSession(this.quizSession)
			this.$emit('quizSessionDeleted', this.quizSession)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
