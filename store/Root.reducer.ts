import { combineReducers } from "redux";

import counterReducer from "./counter/Counter.reducer";
import categoryReducer from "./category/Category.reducer";
import { HYDRATE } from "next-redux-wrapper";

export type IRootState = ReturnType<typeof rootReducer> & { HYDRATE: string };
// export const rootReducer = combineReducers({
//   counter: counterReducer,
//   category: categoryReducer,
// });

export const combinedReducer = combineReducers({
  counter: counterReducer,
  category: categoryReducer,
});

export const rootReducer = (
  state: ReturnType<typeof combinedReducer>,
  action: any
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};
