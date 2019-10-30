import { SIGN_UP, SIGN_OUT, SIGN_IN } from "../actions/types";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return payload;
    case SIGN_OUT:
      return {};
    case SIGN_UP:
      return payload;
    default:
      return state;
  }
};

export default { user: userReducer };
