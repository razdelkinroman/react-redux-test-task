import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useAuth from 'Core/Hooks/useAuth';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogin = useAuth();

  return (
    <Route {...rest} render={props => (isLogin ? <Redirect to="/" /> : <Component {...props} />)} />
  );
};
