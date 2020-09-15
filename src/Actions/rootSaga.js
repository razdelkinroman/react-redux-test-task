import { all } from 'redux-saga/effects';
import login from './login/saga';
import orders from './orders/saga';

export default function* rootSaga() {
  yield all([login(), orders()]);
}
