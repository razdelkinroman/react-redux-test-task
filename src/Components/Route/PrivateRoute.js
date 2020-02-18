import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from 'Core/Hooks/useAuth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isLogin !== false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
