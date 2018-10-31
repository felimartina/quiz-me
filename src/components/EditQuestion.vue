<template>
  <div>
    <b-form>
      <b-form-group id="lblQuestion"
                    label="Question:"
                    label-for="txtQuestion"
                    description="Use UPPERCASE for negated questions (ie. NOT instead of not).">
          <b-form-textarea id="txtQuestion"
                      v-model="question"
                      :rows="4"
                      :max-rows="10">
          </b-form-textarea>
      </b-form-group>
      <b-form-checkbox id="chkIsProfessional" v-model="isProfessional">
        This is PROFESSIONAL question
      </b-form-checkbox>
      <b-card bg-variant="light">
        <b-form-group breakpoint="lg"
                      label="Options"
                      label-size="lg"
                      label-class="font-weight-bold pt-0"
                      class="mb-0">
          <b-form-group label="Answer:"
                        label-class="text-sm-right"
                        label-for="txtOptionDescription">
            <b-form-textarea id="txtOptionDescription"
                      v-model="optionDescription"
                      :rows="3"
                      :max-rows="10">
            </b-form-textarea>
          </b-form-group>
          <b-form-group label="Explanation:"
                        label-class="text-sm-right"
                        label-for="txtOptionExplanation">
            <b-form-textarea id="txtOptionExplanation"
                      v-model="optionExplanation"
                      :rows="3"
                      :max-rows="10">
            </b-form-textarea>
          </b-form-group>
          <b-form-checkbox id="txtIsCorrectAnswer" v-model="optionIsCorrectAnswer">
            This is one of the correct answers
          </b-form-checkbox>
          <b-form-group class="text-right">
            <b-button variant="danger">
              Clear
            </b-button>
            <b-button variant="primary" @click="addOption">
              Add Option
            </b-button>
          </b-form-group>
          <b-table :fields="fields" :items="options">
            <template slot="index" slot-scope="data">
              {{data.index + 1}}
            </template>
            <template slot="name" slot-scope="data">
              {{data.value.first}} {{data.value.last}}
            </template>
            <template slot="nameage" slot-scope="data">
              {{data.item.name.first}} is {{data.item.age}} years old
            </template>
          </b-table>
        </b-form-group>
      </b-card>
    </b-form>
  </div>
</template>

<script>
import { Api } from "@/services";
import { QuestionTypeConstants } from "@/services";

export default {
  name: "Question",
  data: function() {
    return {
      fields: [
        {
          key: "isCorrectAnswer",
          label: "Answer"
        },
        {
          key: "description",
          label: "Description"
        },
        {
          key: "explanation",
          label: "Explanation"
        },
      ],
      id: "",
      question: "",
      options: [],
      answers: [],
      tags: [],
      warnings: [],
      type: QuestionTypeConstants.SINGLE_SELECTION,
      isProfessional: false,
      optionDescription: "",
      optionExplanation: "",
      optionIsCorrectAnswer: false
    };
  },
  props: {},
  computed: {},
  methods: {
    addOption() {
      this.options.push({
        description: this.optionDescription,
        explanation: this.optionExplanation,
        isCorrectAnswer: this.optionIsCorrectAnswer
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
