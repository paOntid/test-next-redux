import { HYDRATE } from "next-redux-wrapper";
import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CURRENT_CATEGORY,
  GET_CURRENT_CATEGORY_FAILURE,
  GET_CURRENT_CATEGORY_SUCCESS,
  CLEAR_CURRENT_CATEGORY,
} from "./Category.constant";

export type CategoryState = {
  category: any[];
  subcategories: any;
};

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload: { category: CategoryState };
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

export interface IGetCurrentCategoryAction {
  type: typeof GET_CURRENT_CATEGORY;
  payload: string | number;
}

export interface IGetCurrentCategorySuccessAction {
  type: typeof GET_CURRENT_CATEGORY_SUCCESS;
  payload: any;
}

export interface IGetCurrentCategoryFailedAction {
  type: typeof GET_CURRENT_CATEGORY_FAILURE;
  payload: any;
}

export interface IClearCurrentCategoryAction {
  type: typeof CLEAR_CURRENT_CATEGORY;
}

export type CategoryActionTypes =
  | IHydrateAction
  | IGetCategoryAction
  | IGetCategorySuccessAction
  | IGetCategoryFailedAction
  | IGetCurrentCategoryAction
  | IGetCurrentCategorySuccessAction
  | IGetCurrentCategoryFailedAction
  | IClearCurrentCategoryAction;
