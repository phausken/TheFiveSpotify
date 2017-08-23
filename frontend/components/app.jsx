import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page';

const App = () => {

  return (
    <div>
        <Route exact path="/" render={() => <Redirect to="/main_page" />} />
        <ProtectedRoute path="/main_page" component={ MainPage } />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
