import { ORDERS } from 'Reducers/orders';

export const getAllOrders = page => {
  return {
    type: ORDERS.GET_ALL_ORDERS_REQUEST,
    payload: page || 1
  };
};

export const addOrder = order => {
  return {
    type: ORDERS.ADD_ORDER_REQUEST,
    payload: order
  };
};

export const updateOrder = order => {
  return {
    type: ORDERS.UPDATE_ORDER_REQUEST,
    payload: order
  };
};

export const deleteOrder = id => {
  return {
    type: ORDERS.DELETE_ORDER_REQUEST,
    payload: id
  };
};

export const openEditForm = order => {
  return {
    type: ORDERS.OPEN_EDIT_FORM,
    payload: order
  };
};

export const cleanEditForm = () => {
  return {
    type: ORDERS.CLEAN_EDIT_FORM
  };
};

export const getDistance = distance => {
  return {
    type: ORDERS.GET_DISTANCE,
    payload: distance
  };
};
