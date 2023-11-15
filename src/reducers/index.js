import {
  SET_QUESTIONS,
  SET_CORRECT,
  SELECT_OPTIONS,
  SET_TIME_TAKEN,
} from "../constants";

const initialState = {
  options: {},
  questions: [],
  results: { correct: 0, timeTaken: 0 },
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
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CORRECT:
      return { ...state, correct: action.payload };
    case SET_TIME_TAKEN:
      return { ...state, timeTaken: action.payload };
    default:
      return state;
  }
};

export { optionsReducer, questionReducer, resultsReducer };
