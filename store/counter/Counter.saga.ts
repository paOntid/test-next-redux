import { call, fork, put, takeLatest } from "redux-saga/effects";
import { getTodosApi } from "../../http";
import { getTodosFailedAction, getTodosSuccessAction } from "./Counter.action";
import { GET_TODOS } from "./Counter.constant";

function* workerGetTodos(): any {
  try {
    const response: any = yield call(getTodosApi);

    console.log("saga response", response.data.slice(0, 5));

    yield put(getTodosSuccessAction(response.data.slice(0, 5)));
  } catch (error) {
    yield put(getTodosFailedAction(error));
  }
}

function* watchGetTodos() {
  yield takeLatest(GET_TODOS, workerGetTodos);
}

export const counterWatchers = [fork(watchGetTodos)];
