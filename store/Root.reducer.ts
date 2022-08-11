import { combineReducers } from "redux";

import counterReducer from "./counter/Counter.reducer";

export type IRootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  counter: counterReducer,
});
