import { createStore, combineReducers } from "redux";
import { optionsReducer, questionReducer } from "./reducers";

const rootReducer = combineReducers({
  options: optionsReducer,
  questions: questionReducer,
});

const store = createStore(rootReducer);

export default store;
