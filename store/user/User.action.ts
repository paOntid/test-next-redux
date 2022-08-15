import {
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  SET_USER,
} from "./User.constant";

export const getUserRequestAction = () => ({
  type: GET_USER,
});

export const getUserSuccessAction = (response: any) => ({
  type: GET_USER_SUCCESS,
  payload: response,
});

export const getUserFailedAction = (error: any) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const setUserAction = (user: any, options: any) => ({
  type: SET_USER,
  payload: { user: user, options },
});
