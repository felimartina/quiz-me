import { QuizSession } from '@/models/'
import { Api } from './api'
import { LocalStorageConstants } from './constants'

export const QuizSessionService = {
  createQuizSession: createQuizSession,
  deleteQuizSession: deleteQuizSession,
  getLastQuizSession: getLastQuizSession,
  getQuizSession: getQuizSession,
  getQuizSessions: getQuizSessions,
  saveQuizSession: saveQuizSession
}

function getKeyForQuizSession (quizId) {
  return `${LocalStorageConstants.QUIZ_SESSION_KEY}|${quizId}`
}

function getQuizSession (quizId) {
  try {
    const storedQuiz = JSON.parse(localStorage.getItem(getKeyForQuizSession(quizId)))
    return new QuizSession(storedQuiz)
  } catch (error) {
    console.error(error)
    return null
  }
}

function getLastQuizSession () {
  const lastQuizId = localStorage.getItem(LocalStorageConstants.LAST_QUIZ_SESSION_ID)
  return getQuizSession(lastQuizId)
}

function saveQuizSession (quizSession) {
  localStorage.setItem(LocalStorageConstants.LAST_QUIZ_SESSION_ID, quizSession.id)
  localStorage.setItem(getKeyForQuizSession(quizSession.id), JSON.stringify(quizSession))
}

function deleteQuizSession (quizSession) {
  localStorage.removeItem(getKeyForQuizSession(quizSession.id))
}

async function createQuizSession (n, tags) {
  return new QuizSession({ questions: await Api.getRandomQuestions(n, tags) })
}

function getQuizSessions () {
  const quizSessions = []
  for (let key of Object.keys(localStorage)) {
    if (key.startsWith(LocalStorageConstants.QUIZ_SESSION_KEY)) {
      const quizSession = new QuizSession(JSON.parse(localStorage.getItem(key)))
      quizSessions.push(quizSession)
    }
  }
  return quizSessions
}
