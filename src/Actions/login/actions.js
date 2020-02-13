import { LOGIN, USER } from 'Reducers/login';

export const getToken = data => {
  return {
    type: LOGIN.GET_TOKEN_REQUEST,
    payload: data
  };
};

export const getUserProfile = () => {
  return {
    type: USER.GET_USER_PROFILE_REQUEST
  };
};
