import {
  CLEAR_CURRENT_CATEGORY,
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
  GET_CURRENT_CATEGORY,
  GET_CURRENT_CATEGORY_FAILURE,
  GET_CURRENT_CATEGORY_SUCCESS,
} from "./Category.constant";

export const getCategoryRequestAction = () => ({
  type: GET_CATEGORY,
});

export const getCategorySuccessAction = (response: any) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: response,
});

export const getCategoryFailedAction = (error: any) => ({
  type: GET_CATEGORY_FAILURE,
  payload: error,
});

export const getCurrentCategoryRequestAction = (id: number | string) => ({
  type: GET_CURRENT_CATEGORY,
  payload: id,
});

export const getCurrentCategorySuccessAction = (response: any) => ({
  type: GET_CURRENT_CATEGORY_SUCCESS,
  payload: response,
});

export const getCurrentCategoryFailedAction = (error: any) => ({
  type: GET_CURRENT_CATEGORY_FAILURE,
  payload: error,
});

export const clearCurrentCategoryAction = () => ({
  type: CLEAR_CURRENT_CATEGORY,
});
