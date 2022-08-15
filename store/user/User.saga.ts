import { getUserApi } from "../../http";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { getUserFailedAction, getUserSuccessAction } from "./User.action";
import { GET_USER } from "./User.constant";

function* workerGetUser(): any {
  try {
    const response: any = yield call(getUserApi);

    localStorage.setItem("user", JSON.stringify(response.data));

    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserFailedAction(error));
  }
}

function* watchGetUser() {
  yield takeLatest(GET_USER, workerGetUser);
}

export const userWatchers = [fork(watchGetUser)];
