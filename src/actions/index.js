import { SELECT_QUESTIONS, SELECT_OPTIONS, BASE_URL } from "../constants";
import axios from "axios";

export const selectOptions = (selectedOptions) => async (dispatch) => {
  try {
    const response = axios.post(`${BASE_URL}/options`, selectedOptions);
    dispatch({ type: SELECT_OPTIONS, payload: response.data });
  } catch (e) {
    console.error(e);
  }
};

export const selectQuestions = (selectedOptions) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`);
    const allQuestions = response.data;
    const { category, questionCount, difficulty } = selectedOptions;
    let filteredQuestions = [];
    if (category === "Any Category" && difficulty === "Any Difficulty") {
      filteredQuestions = allQuestions;
    } else {
      filteredQuestions = allQuestions.filter(
        (q) => q.category === category && q.difficulty === difficulty
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
