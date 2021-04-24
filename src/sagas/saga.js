import * as actions from "../actions/index";
import { takeLatest, call, put } from "redux-saga/effects";
import * as Api from "../apis/index";

function* getUsers() {
  const response = yield call(Api.getUsers, {});
  yield put(actions.updateUsers(response.data?.data));
}

function* createUser(action) {
  console.log(action)
  const response = yield call(Api.createUser, {payload:action.payload});
  yield put(actions.userCreated(response));
}

function* deleteUser(action) {
  const response = yield call(Api.deleteUser, {id:action.payload});
  yield put(actions.userDeleted(response));
  alert("User Deleted"); //temporary;
}


export function* watchDashboard() {
  yield takeLatest("GET_USERS", getUsers);
  yield takeLatest("DEL_USER", deleteUser);
  yield takeLatest("CREATE_USER", createUser);
}
