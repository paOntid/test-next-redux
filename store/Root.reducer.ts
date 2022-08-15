import { combineReducers } from "redux";

import userReducer from "./user/User.reducer";
import counterReducer from "./counter/Counter.reducer";
import categoryReducer from "./category/Category.reducer";
import { HYDRATE } from "next-redux-wrapper";

export type IRootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  counter: counterReducer,
  category: categoryReducer,
  user: userReducer,
});
