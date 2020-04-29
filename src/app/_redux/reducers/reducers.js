import { combineReducers } from "redux";
import { movies } from "./movies";

// combine reducers
const reducers = combineReducers({
  movies,
});

export default reducers;
