export const ORDERS = {
  GET_ALL_ORDERS_REQUEST: 'GET_ALL_ORDERS_REQUEST',
  GET_ALL_ORDERS_SUCCESS: 'GET_ALL_ORDERS_SUCCESS',
  GET_ALL_ORDERS_ERROR: 'GET_ALL_ORDERS_ERROR',

  ADD_ORDER_REQUEST: 'ADD_ORDER_REQUEST',
  ADD_ORDER_SUCCESS: 'ADD_ORDER_SUCCESS',
  ADD_ORDER_ERROR: 'ADD_ORDER_ERROR',

  UPDATE_ORDER_REQUEST: 'UPDATE_ORDER_REQUEST',
  UPDATE_ORDER_SUCCESS: 'UPDATE_ORDER_SUCCESS',
  UPDATE_ORDER_ERROR: 'UPDATE_ORDER_ERROR',

  DELETE_ORDER_REQUEST: 'DELETE_ORDER_REQUEST',
  DELETE_ORDER_SUCCESS: 'DELETE_ORDER_SUCCESS',
  DELETE_ORDER_ERROR: 'DELETE_ORDER_ERROR',

  OPEN_EDIT_FORM: 'OPEN_EDIT_FORM',
  CLEAN_EDIT_FORM: 'CLEAN_EDIT_FORM',
  GET_DISTANCE: 'GET_DISTANCE'
};

const initialState = {
  items: '',
  errors: '',
  editableOrder: '',
  loading: true,
  distance: ''
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS.GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        items: [],
        errors: {},
        loading: true
      };
    case ORDERS.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        items: action.payload,
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
