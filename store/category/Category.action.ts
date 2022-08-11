import {
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
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
