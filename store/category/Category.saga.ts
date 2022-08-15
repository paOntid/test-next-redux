import { getCategoryApi, getCurrentCategoryApi } from "../../http";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  getCategoryFailedAction,
  getCategorySuccessAction,
  getCurrentCategoryFailedAction,
  getCurrentCategorySuccessAction,
} from "./Category.action";
import { GET_CATEGORY, GET_CURRENT_CATEGORY } from "./Category.constant";

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

function* workerGetCurrentCategory({
  payload,
}: {
  payload: number | string;
}): any {
  try {
    const response: any = yield call(getCurrentCategoryApi, payload);

    yield put(getCurrentCategorySuccessAction(response.data?.data));
  } catch (error) {
    yield put(getCurrentCategoryFailedAction(error));
  }
}

function* watchGetCurrentCategory() {
  yield takeLatest(GET_CURRENT_CATEGORY, workerGetCurrentCategory);
}

export const categoryWatchers = [
  fork([watchGetCategory, watchGetCurrentCategory]),
];
