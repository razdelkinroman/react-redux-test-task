import React from 'react';
import { Switch } from 'react-router-dom';

import LoginPage from 'Containers/LoginPage';
import MainContainer from 'Containers/MainContainer';
import { PrivateRoute } from 'Components/Route/PrivateRoute';
import { PublicRoute } from 'Components/Route/PublicRoute';

import 'index.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/login" exact component={LoginPage} />
        <PrivateRoute path="/" component={MainContainer} />
      </Switch>
    </div>
  );
};

export default App;
