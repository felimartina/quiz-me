import uuidv4 from 'uuid/v4'
import { Question } from './Question'
export class QuizSession {
  constructor ({id, startedOn, questions, currentQuestionIndex}) {
    this.id = id || uuidv4()
    this.startedOn = startedOn ? new Date(startedOn) : new Date()
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      throw new Error(`Cannot create a Quiz Session with an empty array of questions`)
    }

    this.questions = questions.map(q => {
      if (q.constructor.name === 'Question') return q
      return new Question(q)
    })
    this.currentQuestionIndex = currentQuestionIndex || 0
  }

  answeredQuestions () {
    return this.questions.filter(q => q.answered === true)
  }

  getResults () {
    return this.questions.reduce((response, current, index) => {
      if (!current.answered) {
        response.unanswered++
      } else {
        if (current.answeredCorrectly) {
          response.answeredCorrectly++
        } else {
          response.notAnsweredCorrectly++
        }
      }
      return response
    }, { unanswered: 0, answeredCorrectly: 0, notAnsweredCorrectly: 0 })
  }
}
