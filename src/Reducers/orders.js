import { makeActionType } from 'Core/Utils';

export const ORDERS = {
  ...makeActionType('GET_ALL_ORDERS'),
  ...makeActionType('ADD_ORDER'),
  ...makeActionType('UPDATE_ORDER'),
  ...makeActionType('DELETE_ORDER'),
  OPEN_EDIT_FORM: 'OPEN_EDIT_FORM',
  CLEAN_EDIT_FORM: 'CLEAN_EDIT_FORM',
  GET_DISTANCE: 'GET_DISTANCE'
};

const initialState = {
  items: '',
  errors: '',
  editableOrder: '',
  loading: true,
  distance: '',
  currentPage: '1',
  totalPages: 1
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS.GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        errors: {},
        loading: true
      };
    case ORDERS.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        items: action.payload.orders,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        loading: false
      };
    case ORDERS.GET_ALL_ORDERS_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case ORDERS.ADD_ORDER_REQUEST:
    case ORDERS.UPDATE_ORDER_REQUEST:
    case ORDERS.DELETE_ORDER_REQUEST:
      return {
        ...state,
        errors: {},
        loading: true
      };
    case ORDERS.ADD_ORDER_SUCCESS:
    case ORDERS.UPDATE_ORDER_SUCCESS:
    case ORDERS.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case ORDERS.ADD_ORDER_ERROR:
    case ORDERS.UPDATE_ORDER_ERROR:
    case ORDERS.DELETE_ORDER_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case ORDERS.OPEN_EDIT_FORM:
      return {
        ...state,
        editableOrder: action.payload
      };
    case ORDERS.CLEAN_EDIT_FORM:
      return {
        ...state,
        editableOrder: '',
        distance: ''
      };
    case ORDERS.GET_DISTANCE:
      return {
        ...state,
        distance: action.payload
      };
    default:
      return state;
  }
};

export default orders;
