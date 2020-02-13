import { all } from "redux-saga/effects";
import login from "./login/saga";

export default function* rootSaga() {
  yield all([login()]);
}
