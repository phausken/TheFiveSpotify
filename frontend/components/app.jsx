import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page';

const App = () => {

  return (
    <div>
        <ProtectedRoute path="/main_page" component={ MainPage } />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
