import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';



const userReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      const newUser = action.user;
      return merge({}, state, newUser);
    default:
      return state;
    }
};

export default userReducer;
