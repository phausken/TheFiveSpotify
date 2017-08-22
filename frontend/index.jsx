import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = login;
  window.logout = logout;
  window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to The Five Spotify</h1>, root);



});
