import { SIGN_IN_USER, REGISTER_USER, LOGOUT } from "../constants/types";

export default (state = { user: {}, token: null }, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
    case REGISTER_USER:
      return {
        user: action.payload.result,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        user: {},
        token: null,
      };
    default:
      return state;
  }
};
