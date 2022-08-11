import { HYDRATE } from "next-redux-wrapper";
import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from "./Category.constant";

export type CategoryState = {
  category: any[];
};

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload: { counter: CategoryState };
}

export interface IGetCategoryAction {
  type: typeof GET_CATEGORY;
}

export interface IGetCategorySuccessAction {
  type: typeof GET_CATEGORY_SUCCESS;
  payload: any;
}

export interface IGetCategoryFailedAction {
  type: typeof GET_CATEGORY_FAILURE;
  payload: any;
}

export type CategoryActionTypes =
  | IHydrateAction
  | IGetCategoryAction
  | IGetCategorySuccessAction
  | IGetCategoryFailedAction;
