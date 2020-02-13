import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import LoginPage from 'Containers/LoginPage';
import MainContainer from 'Containers/MainContainer';
import { PrivateRoute } from 'Components/Route/PrivateRoute';
import { PublicRoute } from 'Components/Route/PublicRoute';

const App = props => {
  const status = useSelector(state => state.login.userStatus);
  const isLogin = status === 'SUCCESS';

  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/login" isLogin={isLogin} component={LoginPage} />
        <PrivateRoute path="/" isLogin={isLogin} component={MainContainer} />
      </Switch>
    </div>
  );
};

export default App;
