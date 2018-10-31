<template>
  <div>
    <form @submit.stop.prevent="handleSubmit">
        <b-form-group
            id="questionFormGroup"
            label="How many questions?"
            label-for="numberOfQuestions">
          <b-form-input type="number" id="numberOfQuestions" v-model="numberOfQuestions"></b-form-input>
        </b-form-group>
        <b-form-group
            id="topicsFormGroup"
            label="Topics">
          <b-form-checkbox v-model="allTagsSelected" :indeterminate="selectedTags.length !== 0 && selectedTags.length !== availableTags.length" @change="toggleAllTags">
            {{ allTagsSelected ? 'Un-select All' : 'Select All' }}
         </b-form-checkbox>
          <b-form-checkbox-group v-model="selectedTags">
            <b-form-checkbox  v-for="(tag, index) in availableTags" :key="index" :value="tag">
              <span>{{ tag }}</span>
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </form>
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button class="mr-1" @click="handleCancel">Cancel</b-button>
          <b-button class="ml-1" variant="success" @click="handleStart">Start</b-button>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import { QuizSessionService, Api } from '@/services/'

const DEFAULT_NUMBER_OF_QUESTIONS = 20

export default {
  name: "CreateNewQuiz",
  components: {
  },
  data() {
    return {
      numberOfQuestions: DEFAULT_NUMBER_OF_QUESTIONS,
      selectedTags: [],
      availableTags: [],
      allTagsSelected: true
    }
  },
  async mounted() {
    this.selectedTags = this.availableTags.slice()
    this.availableTags = await Api.getTags()
  }, 
  methods: {
    handleCancel() {
      this.$emit('quizCreationCancelled')
    },
    async handleStart() {
      try {
        const quizSession = await QuizSessionService.createQuizSession(this.numberOfQuestions, this.allTagsSelected ? [] : this.selectedTags)
        this.$emit('quizSessionCreated', quizSession)
      } catch (error) {
        this.$refs.noQuestionsFoundAlert.show()
      }
    },
    toggleAllTags(checked) {
      this.selectedTags = checked ? this.availableTags.slice() : []
    },
    hideNoQuestionsFoundAlert () {
      this.$refs.noQuestionsFoundAlert.hide()
    }
  }
}
</script>
<style scoped>
</style>
