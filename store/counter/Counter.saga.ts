import { getCategoryApi } from "./../../http/index";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { getTodosApi } from "../../http";
import {
  getCategoryFailedAction,
  getCategorySuccessAction,
  getTodosFailedAction,
  getTodosSuccessAction,
} from "./Counter.action";
import { GET_TODOS, GET_CATEGORY } from "./Counter.constant";

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

function* workerGetCategory(): any {
  try {
    const response: any = yield call(getCategoryApi);

    console.log("response", response);

    yield put(getCategorySuccessAction(response.data?.data));
  } catch (error) {
    yield put(getCategoryFailedAction(error));
  }
}

function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY, workerGetCategory);
}

export const counterWatchers = [fork(watchGetTodos), fork(watchGetCategory)];
