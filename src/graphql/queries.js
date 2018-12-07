// eslint-disable
// this is an auto generated file. This will be overwritten

export const getQuiz = `query GetQuiz($id: ID!) {
  getQuiz(id: $id) {
    id
    name
    date
    questions {
      id
      question
      isOutdated
      isProfessional
      exam
    }
  }
}
`;
export const listQuizs = `query ListQuizs(
  $filter: ModelQuizFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      date
      questions {
        id
        question
        isOutdated
        isProfessional
        exam
      }
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    question
    type
    tags {
      name
    }
    isOutdated
    isProfessional
    exam
    options {
      items {
        id
        description
        explanation
        isCorrectAnswer
      }
      nextToken
    }
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      type
      tags {
        name
      }
      isOutdated
      isProfessional
      exam
      options {
        items {
          id
          description
          explanation
          isCorrectAnswer
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestionOption = `query GetQuestionOption($id: ID!) {
  getQuestionOption(id: $id) {
    id
    question {
      id
      question
      isOutdated
      isProfessional
      exam
    }
    description
    explanation
    isCorrectAnswer
  }
}
`;
export const listQuestionOptions = `query ListQuestionOptions(
  $filter: ModelQuestionOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question {
        id
        question
        isOutdated
        isProfessional
        exam
      }
      description
      explanation
      isCorrectAnswer
    }
    nextToken
  }
}
`;
export const getTag = `query GetTag($id: ID!) {
  getTag(id: $id) {
    name
  }
}
`;
export const listTags = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
    }
    nextToken
  }
}
`;
