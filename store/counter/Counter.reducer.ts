import { HYDRATE } from "next-redux-wrapper";
import {
  DECREMENT,
  GET_TODOS_SUCCESS,
  INCREMENT,
  SET_TODOS,
} from "./Counter.constant";
import { CounterActionTypes, CounterState } from "./Counter.type";

const initialState: CounterState = {
  count: 0,
  todos: [],
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
      // console.log("counter hydrate", action.payload);
      return {
        ...state,
        ...action.payload?.counter,
      };
    default:
      return { ...state };
  }
}
