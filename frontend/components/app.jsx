import React from 'react';
import { Route, Switch } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page';

const App = () => {

  return (
    <div>
      <Switch>
        <ProtectedRoute path="/main_page" component={ MainPage } />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
