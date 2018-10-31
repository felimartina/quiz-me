<template>
  <div class="admin-edit-question">
    <b-row>
      <b-col xl="3"></b-col>
      <b-col><edit-question></edit-question></b-col>
      <b-col xl="3"></b-col>
    </b-row>
  </div>
</template>

<script>
import EditQuestion from '@/components/EditQuestion.vue'

export default {
  name: 'home',
  components: {
		EditQuestion,
	},
	data: function() {
		return {
			
		}
	},
  mounted: async function() {
		
	},
	methods: {
		
	}
}
</script>
