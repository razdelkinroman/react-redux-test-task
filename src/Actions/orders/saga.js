import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllOrdersApi, addOrderApi, updateOrderApi, deleteOrderApi } from 'Services/orders';
import { ORDERS } from 'Reducers/orders';

// Получение списка посылок.
function* getAllOrders() {
  try {
    const { data } = yield call(getAllOrdersApi);
    yield put({ type: ORDERS.GET_ALL_ORDERS_SUCCESS, payload: data });
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: ORDERS.GET_ALL_ORDERS_ERROR, payload: data });
  }
}

// Добавление новой посылки.
function* addOrder(action) {
  try {
    yield call(addOrderApi, action.payload);
    yield put({ type: ORDERS.ADD_ORDER_SUCCESS });
    yield getAllOrders();
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: ORDERS.ADD_ORDER_ERROR, payload: data });
  }
}

// Редактирование посылки.
function* updateOrder(action) {
  try {
    yield call(updateOrderApi, action.payload);
    yield put({ type: ORDERS.UPDATE_ORDER_SUCCESS });
    yield getAllOrders();
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: ORDERS.UPDATE_ORDER_ERROR, payload: data });
  }
}

// Удаление посылки.
function* deleteOrder(action) {
  try {
    yield call(deleteOrderApi, action.payload);
    yield put({ type: ORDERS.DELETE_ORDER_SUCCESS });
    yield getAllOrders();
  } catch ({ response }) {
    const { data } = response;
    yield put({ type: ORDERS.DELETE_ORDER_ERROR, payload: data });
  }
}

export default function* userSaga() {
  yield takeLatest(ORDERS.GET_ALL_ORDERS_REQUEST, getAllOrders);
  yield takeLatest(ORDERS.ADD_ORDER_REQUEST, addOrder);
  yield takeLatest(ORDERS.UPDATE_ORDER_REQUEST, updateOrder);
  yield takeLatest(ORDERS.DELETE_ORDER_REQUEST, deleteOrder);
}
