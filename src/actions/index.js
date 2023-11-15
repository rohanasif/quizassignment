import { SET_QUESTIONS, SELECT_OPTIONS } from "../constants";
import axios from "axios";

export const selectOptions = () => async () => ({ type: SELECT_OPTIONS });

export const setQuestions = () => async () => ({ type: SET_QUESTIONS });
