import { ORDERS } from 'Reducers/orders';

export const getOrders = () => {
  return {
    type: ORDERS.GET_ORDERS
  };
};

export const addOrder = order => {
  return {
    type: ORDERS.ADD_ORDER,
    payload: order
  };
};

export const updateOrder = order => {
  return {
    type: ORDERS.UPDATE_ORDER,
    payload: order
  };
};

export const deleteOrder = title => {
  return {
    type: ORDERS.DELETE_ORDER,
    payload: title
  };
};

export const editOrder = order => {
  return {
    type: ORDERS.EDIT_ORDER,
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
