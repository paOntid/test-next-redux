import { all } from "redux-saga/effects";

import { counterWatchers } from "./counter/Counter.saga";

export function* rootSagas() {
  yield all([...counterWatchers]);
}
