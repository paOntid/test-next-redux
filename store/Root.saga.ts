import { all } from "redux-saga/effects";

import { counterWatchers } from "./counter/Counter.saga";
import { categoryWatchers } from "./category/Category.saga";

export function* rootSagas() {
  yield all([...counterWatchers, ...categoryWatchers]);
}
