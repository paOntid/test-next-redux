import { HYDRATE } from "next-redux-wrapper";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SET_USER,
} from "./User.constant";

export type UserState = {
  user: any;
  isServerUpdate: boolean;
};

export interface IGetUserAction {
  type: typeof GET_USER;
}

export interface IGetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  payload: any;
}

export interface IGetUserFailedAction {
  type: typeof GET_USER_FAILURE;
  payload: any;
}

export interface ISetUserAction {
  type: typeof SET_USER;
  payload: any;
}

export interface IHydrate {
  type: typeof HYDRATE;
  payload: UserState;
}

export type UserActionTypes =
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | ISetUserAction
  | IHydrate;
