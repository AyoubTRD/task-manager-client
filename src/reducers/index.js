import {} from "../actions/types";
import { combineReducers } from "redux";

const tasksReducer = (state = [], { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer
});
