import { ADD_NAME, GET_QUESTIONS, SELECT_OPTIONS } from "../constants";

const initialOptions = {
  name: "",
  options: {},
};

const optionsReducer = (state = initialOptions, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.payload };
    case SELECT_OPTIONS:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};

const initialQuestions = { questions: [] };

const questionReducer = (state = initialQuestions, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload };
  }
};

export { optionsReducer, questionReducer };
