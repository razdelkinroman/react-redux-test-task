import { tokenInCache } from 'Core/Utils';
/*
Статус пользователя.
  NOT_AUTHORIZED - Не авторизирован.
  SUCCESS - Данные пользователя получены.
  ERROR - Ошибка входа.
*/
export const USER_STATUSES = {
  NOT_AUTHORIZED: 'NOT_AUTHORIZED',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export const LOGIN = {
  GET_TOKEN_REQUEST: 'GET_TOKEN_REQUEST',
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_ERROR: 'GET_TOKEN_ERROR'
};

export const USER = {
  GET_USER_PROFILE_REQUEST: 'GET_USER_PROFILE_REQUEST',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  GET_USER_PROFILE_ERROR: 'GET_USER_PROFILE_ERROR'
};

const initialState = {
  userData: {},
  userStatus: tokenInCache() ? USER_STATUSES.SUCCESS : USER_STATUSES.NOT_AUTHORIZED,
  errors: '',
  loading: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.GET_TOKEN_REQUEST:
      return {
        ...state,
        userStatus: USER_STATUSES.SING_IN,
        errors: '',
        loading: true
      };
    case LOGIN.GET_TOKEN_SUCCESS:
      return {
        ...state,
        userStatus: USER_STATUSES.SUCCESS,
        loading: false
      };
    case LOGIN.GET_TOKEN_ERROR:
      return {
        ...state,
        userStatus: USER_STATUSES.ERROR,
        errors: action.payload,
        loading: false
      };
    case USER.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userData: action.payload
      };
    case USER.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default login;
