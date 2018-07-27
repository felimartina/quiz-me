export class Question {
  constructor ({ id, question, options, answers, type, tags, warnings, isOutdated, answered = false, selectedAnswers = null, answeredCorrectly = null }) {
    this.id = id
    this.question = question
    this.options = options
    this.answers = answers
    this.type = type
    this.tags = tags
    this.warnings = warnings
    this.isOutdated = isOutdated
    this.answered = answered
    this.selectedAnswers = selectedAnswers
    this.answeredCorrectly = answeredCorrectly
  }
}
