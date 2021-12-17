import { SIGN_IN_USER, REGISTER_USER, LOGOUT } from "../constants/types";

import * as api from "../../api/index.js";

export const login = (loginData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(loginData);
    dispatch({ type: SIGN_IN_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (registerData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(registerData);

    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = () => {
  return { type: LOGOUT };
};
