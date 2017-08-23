import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    errors: [],
  };
};

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
  res => dispatch(receiveErrors(res.responseJSON)));
};

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    res => dispatch(receiveErrors(res.responseJSON)));
};

export const removeErrors = () => dispatch => {
  return (
    dispatch(clearErrors())
  );
};


export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};
