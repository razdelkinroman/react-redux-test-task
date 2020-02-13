export const ORDERS = {
  GET_ORDERS: 'GET_ORDERS',
  ADD_ORDER: 'ADD_ORDER',
  DELETE_ORDER: 'DELETE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  EDIT_ORDER: 'EDIT_ORDER',
  CLEAN_EDIT_FORM: 'CLEAN_EDIT_FORM'
};

const data = [
  {
    id: 1,
    title: 'Посылка №1',
    distance: '500',
    type: 'international',
    price: '2500'
  },
  {
    id: 2,
    title: 'Посылка №2',
    distance: '100',
    type: 'internal',
    price: '300'
  }
];

const initialState = {
  items: '',
  errors: '',
  editableOrder: '',
  loading: true
};

const savedOrders = (state, item) => {
  const values = state;
  const index = values.findIndex(i => i.id === item.id);
  values[index] = item;
  return values;
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS.GET_ORDERS:
      return {
        ...state,
        items: data,
        errors: {},
        loading: false
      };
    case ORDERS.GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        items: [],
        loading: false
      };
    case ORDERS.GET_USER_ORDERS_ERROR:
      return {
        ...state,
        errors: 'Ошибка получения данныч',
        loading: false
      };
    case ORDERS.ADD_ORDER:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ORDERS.DELETE_ORDER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ORDERS.UPDATE_ORDER:
      return {
        ...state,
        items: [...savedOrders(state.items, action.payload)],
        editableOrder: ''
      };
    case ORDERS.EDIT_ORDER:
      return {
        ...state,
        editableOrder: action.payload
      };
    case ORDERS.CLEAN_EDIT_FORM:
      return {
        ...state,
        editableOrder: ''
      };
    default:
      return state;
  }
};

export default orders;
