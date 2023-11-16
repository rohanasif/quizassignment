import {
  SELECT_QUESTIONS,
  GET_QUESTION,
  SET_CORRECT,
  SELECT_OPTIONS,
  GET_TOTAL_TIME,
  CHECK_QUESTIONS,
  TIME_UP,
  COUNT_DOWN,
  SET_COUNTER,
  SET_QUESTION_TIME,
} from "../constants";

const initialState = {
  options: {
    name: "",
    category: "",
    questionCount: 0,
    difficulty: "",
    type: "",
    timePerQuestion: 0,
  },
  questions: [],
  selectedQuestions: [],
  currentQuestion: {},
  results: { correct: 0, incorrect: 0, timeTaken: 0, timeUp: false },
  counter: { time: 0 },
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPTIONS:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_QUESTIONS:
      return { ...state, selectedQuestions: action.payload };
    case GET_QUESTION:
      return { ...state, currentQuestion: action.payload };
    case CHECK_QUESTIONS:
      return {
        ...state,
        questions: state.selectedQuestions.map((question) =>
          question.answers.map((answer) =>
            answer.option === action.payload && answer.is_correct
              ? answer.push({ marks: 1 })
              : answer.push({ marks: 0 })
          )
        ),
      };
    case TIME_UP:
      return { ...state, results: { ...state.results, timeUp: true } };
    case SET_COUNTER:
      return { ...state, counter: { time: state.options.timePerQuestion } };
    case COUNT_DOWN:
      return { ...state, counter: state.counter.time - 1 };
    case SET_QUESTION_TIME:
      return {
        ...state,
        questions: state.selectedQuestions.map((question) => ({
          ...question,
          timeTaken: action.payload,
        })),
      };
    default:
      return state;
  }
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CORRECT:
      return { ...state, correct: action.payload };
    case GET_TOTAL_TIME:
      return {
        ...state,
        results: {
          ...state.results,
          timeTaken: state.selectedQuestions.reduce(
            (accumulator, currQuestion) => accumulator + currQuestion.timeTaken,
            0
          ),
        },
      };
    default:
      return state;
  }
};

export { optionsReducer, questionReducer, resultsReducer };
