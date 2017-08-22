import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <h1>The Five Spotify</h1>

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
}
export default App;
