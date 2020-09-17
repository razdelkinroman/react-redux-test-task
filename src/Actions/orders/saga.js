import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getAllOrdersApi, addOrderApi, updateOrderApi, deleteOrderApi } from 'Services/orders';
import { ORDERS } from 'Reducers/orders';
import { checkPage } from '../../Core/Utils';

// Получение списка посылок.
function* getAllOrders(action) {
  try {
    const { data } = yield call(getAllOrdersApi, action.payload);
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
    const state = yield select();
    yield getAllOrders({ payload: checkPage(state.orders.currentPage, state.orders.items) });
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
    const state = yield select();
    yield getAllOrders({ payload: state.orders.currentPage });
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
    const state = yield select();
    yield getAllOrders({ payload: checkPage(state.orders.currentPage, state.orders.items) });
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
