import { HYDRATE } from "next-redux-wrapper";
import { GET_USER_SUCCESS, SET_USER } from "./User.constant";
import { UserActionTypes, UserState } from "./User.type";

const initialState: UserState = {
  user: null,
  isServerUpdate: false,
};

export default function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isServerUpdate: !!action.payload?.options?.isServerUpdate,
      };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
}
