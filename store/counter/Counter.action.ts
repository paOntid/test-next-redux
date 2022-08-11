import {
  DECREMENT,
  GET_TODOS,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
  INCREMENT,
  SET_TODOS,
} from "./Counter.constant";

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const getTodosAction = () => ({
  type: GET_TODOS,
});

export const setTodosAction = (data: any) => ({
  type: SET_TODOS,
  payload: data,
});

export const getTodosSuccessAction = (response: any) => ({
  type: GET_TODOS_SUCCESS,
  payload: response,
});

export const getTodosFailedAction = (error: any) => ({
  type: GET_TODOS_FAILED,
  payload: error,
});
