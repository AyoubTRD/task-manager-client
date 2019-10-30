import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import usersReducer from "./users";

export default combineReducers({
  ...tasksReducer,
  ...usersReducer
});
