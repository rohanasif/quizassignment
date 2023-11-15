import { createStore, combineReducers, applyMiddleware } from "redux";
import { optionsReducer, questionReducer, resultsReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  options: optionsReducer,
  questions: questionReducer,
  results: resultsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
