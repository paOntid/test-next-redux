import { HYDRATE } from "next-redux-wrapper";
import {
  DECREMENT,
  GET_TODOS,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
  INCREMENT,
  SET_TODOS,
} from "./Counter.constant";

export type CounterState = {
  count: number;
  todos: {
    id: number;
    title: string;
  }[];
};

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload: { counter: CounterState };
}

export interface IIncrementAction {
  type: typeof INCREMENT;
}

export interface IDecrementAction {
  type: typeof DECREMENT;
}

export interface IGetTodosAction {
  type: typeof GET_TODOS;
}

export interface IGetTodosSuccessAction {
  type: typeof GET_TODOS_SUCCESS;
  payload: any;
}

export interface IGetTodosFailedAction {
  type: typeof GET_TODOS_FAILED;
  payload: any;
}

export interface ISetTodosAction {
  type: typeof SET_TODOS;
  payload: any;
}

export type CounterActionTypes =
  | IIncrementAction
  | IDecrementAction
  | IGetTodosAction
  | IGetTodosSuccessAction
  | IGetTodosFailedAction
  | ISetTodosAction
  | IHydrateAction;
