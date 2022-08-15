import { HYDRATE } from "next-redux-wrapper";
import {
  CLEAR_CURRENT_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CURRENT_CATEGORY_SUCCESS,
} from "./Category.constant";
import { CategoryActionTypes, CategoryState } from "./Category.type";

const initialState: CategoryState = {
  category: [],
  subcategories: [],
};

export default function categoryReducer(
  state = initialState,
  action: CategoryActionTypes
): CategoryState {
  switch (action.type) {
    case HYDRATE:
      console.log("category hydrate", action.payload);
      return {
        ...state,
        ...action.payload?.category,
      };
    case GET_CATEGORY_SUCCESS:
      return { ...state, category: action.payload };
    case GET_CURRENT_CATEGORY_SUCCESS:
      return { ...state, subcategories: action.payload };
    case CLEAR_CURRENT_CATEGORY:
      return { ...state, subcategories: [] };
    default:
      return { ...state };
  }
}
