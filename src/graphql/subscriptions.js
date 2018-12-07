// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = `subscription OnCreateQuiz {
  onCreateQuiz {
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
export const onUpdateQuiz = `subscription OnUpdateQuiz {
  onUpdateQuiz {
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
export const onDeleteQuiz = `subscription OnDeleteQuiz {
  onDeleteQuiz {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateQuestionOption = `subscription OnCreateQuestionOption {
  onCreateQuestionOption {
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
export const onUpdateQuestionOption = `subscription OnUpdateQuestionOption {
  onUpdateQuestionOption {
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
export const onDeleteQuestionOption = `subscription OnDeleteQuestionOption {
  onDeleteQuestionOption {
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
export const onCreateTag = `subscription OnCreateTag {
  onCreateTag {
    name
  }
}
`;
export const onUpdateTag = `subscription OnUpdateTag {
  onUpdateTag {
    name
  }
}
`;
export const onDeleteTag = `subscription OnDeleteTag {
  onDeleteTag {
    name
  }
}
`;
