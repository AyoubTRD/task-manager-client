import {
  GET_TASKS,
  GET_TASK,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from "../actions/types";

const arrToObj = arr => {
  const obj = {};
  arr.forEach(el => {
    obj[el._id] = el;
  });
  return obj;
};

const tasksReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TASKS:
      return arrToObj(payload);
    case CREATE_TASK:
      return { ...state, [payload._id]: payload };
    case EDIT_TASK:
      return { ...state, [payload._id]: payload };
    case DELETE_TASK:
      return { ...state, [payload._id]: undefined };

    default:
      return state;
  }
};

const taskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TASK:
      return payload;
    default:
      return state;
  }
};

export default { task: taskReducer, tasks: tasksReducer };
