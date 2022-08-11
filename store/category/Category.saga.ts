import { getCategoryApi } from "../../http";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  getCategoryFailedAction,
  getCategorySuccessAction,
} from "./Category.action";
import { GET_CATEGORY } from "./Category.constant";

function* workerGetCategory(): any {
  try {
    const response: any = yield call(getCategoryApi);

    yield put(getCategorySuccessAction(response.data?.data));
  } catch (error) {
    yield put(getCategoryFailedAction(error));
  }
}

function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY, workerGetCategory);
}

export const categoryWatchers = [fork(watchGetCategory)];
