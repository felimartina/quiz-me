// eslint-disable
// this is an auto generated file. This will be overwritten

export const createQuiz = `mutation CreateQuiz($input: CreateQuizInput!) {
  createQuiz(input: $input) {
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
export const updateQuiz = `mutation UpdateQuiz($input: UpdateQuizInput!) {
  updateQuiz(input: $input) {
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
export const deleteQuiz = `mutation DeleteQuiz($input: DeleteQuizInput!) {
  deleteQuiz(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
export const createQuestionOption = `mutation CreateQuestionOption($input: CreateQuestionOptionInput!) {
  createQuestionOption(input: $input) {
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
export const updateQuestionOption = `mutation UpdateQuestionOption($input: UpdateQuestionOptionInput!) {
  updateQuestionOption(input: $input) {
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
export const deleteQuestionOption = `mutation DeleteQuestionOption($input: DeleteQuestionOptionInput!) {
  deleteQuestionOption(input: $input) {
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
export const createTag = `mutation CreateTag($input: CreateTagInput!) {
  createTag(input: $input) {
    name
  }
}
`;
export const updateTag = `mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
    name
  }
}
`;
export const deleteTag = `mutation DeleteTag($input: DeleteTagInput!) {
  deleteTag(input: $input) {
    name
  }
}
`;
