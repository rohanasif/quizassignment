import {
  SELECT_QUESTIONS,
  SELECT_OPTIONS,
  BASE_URL,
  GET_QUESTION,
} from "../constants";
import axios from "axios";

export const selectOptions = (selectedOptions) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/options`, selectedOptions);
    dispatch({ type: SELECT_OPTIONS, payload: response.data });
  } catch (e) {
    console.error(e);
  }
};

export const selectQuestions = (selectedOptions) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`);
    const allQuestions = response.data;
    const { category, questionCount, difficulty, type } = selectedOptions;
    let filteredQuestions = [];
    if (
      category === "Any Category" &&
      difficulty === "Any Difficulty" &&
      type === "Any Type"
    ) {
      filteredQuestions = allQuestions;
    } else {
      filteredQuestions = allQuestions.filter(
        (q) =>
          q.category === category &&
          q.difficulty === difficulty &&
          q.type === type
      );
    }
    let questionsToShow = [];
    for (let i = 0; i < questionCount; i++) {
      let randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      questionsToShow.push(filteredQuestions[randomIndex]);
    }
    dispatch({ type: SELECT_QUESTIONS, payload: questionsToShow });
  } catch (e) {
    console.error(e);
  }
};

export const getQuestion = (selectedQuestions) => async (dispatch) => {
  try {
    let randomIndex = Math.floor(Math.random() * selectedQuestions.length);
    let newArray = [...selectedQuestions];
    const chosenQuestion = newArray.slice(randomIndex, randomIndex + 1)[0];
    const response = await axios.post(
      `${BASE_URL}/currentQuestion`,
      chosenQuestion
    );
    dispatch({ type: GET_QUESTION, payload: response.data });
  } catch (e) {
    console.error(e);
  }
};
