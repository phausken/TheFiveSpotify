import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import {RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const nullUser = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [], };
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors, });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [],});
    case RECEIVE_PLAYLIST:
        console.log(action.type)
    default:
      return state;

  }
};

export default sessionReducer;
