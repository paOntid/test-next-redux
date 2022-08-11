import { HYDRATE } from "next-redux-wrapper";
import { GET_CATEGORY_SUCCESS } from "./Category.constant";
import { CategoryActionTypes, CategoryState } from "./Category.type";

const initialState: CategoryState = {
  category: [],
};

export default function categoryReducer(
  state = initialState,
  action: CategoryActionTypes
): CategoryState {
  switch (action.type) {
    // case HYDRATE:
    //   console.log("HYDRATE");
    //   return { ...state, ...action.payload?.category };
    case GET_CATEGORY_SUCCESS:
      return { ...state, category: action.payload };
    default:
      return { ...state };
  }
}
