import { call, put, takeLatest } from 'redux-saga/effects';
import { getTokenApi, getUserProfileApi } from 'Services/loginApi';
import { LOGIN, USER } from 'Reducers/login';

// Получение токена.
function* getToken(action) {
  try {
    const { data } = yield call(getTokenApi, action.payload);
    const token = data && data.token;
    yield put({ type: LOGIN.GET_TOKEN_SUCCESS });
    yield localStorage.setItem('cacheToken', token);
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: LOGIN.GET_TOKEN_ERROR, payload: data });
  }
}

// Получение данных профиля.
function* getUserProfile() {
  try {
    const { data } = yield call(getUserProfileApi);
    yield put({ type: USER.GET_USER_PROFILE_SUCCESS, payload: data });
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: USER.GET_USER_PROFILE_ERROR, payload: data });
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN.GET_TOKEN_REQUEST, getToken);
  yield takeLatest(USER.GET_USER_PROFILE_REQUEST, getUserProfile);
}
