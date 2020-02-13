import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route {...rest} render={props => (isLogin ? <Redirect to="/" /> : <Component {...props} />)} />
  );
};
