import { HYDRATE } from "next-redux-wrapper";
import {
  DECREMENT,
  GET_CATEGORY_SUCCESS,
  GET_TODOS_SUCCESS,
  INCREMENT,
  SET_TODOS,
} from "./Counter.constant";
import { CounterActionTypes, CounterState } from "./Counter.type";

const initialState: CounterState = {
  count: 0,
  todos: [],
  category: [],
};

export default function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case HYDRATE:
      console.log("HYDRATE");
      return { ...state, ...action.payload?.counter };
    case GET_CATEGORY_SUCCESS:
      return { ...state, category: action.payload };
    default:
      return { ...state };
  }
}
