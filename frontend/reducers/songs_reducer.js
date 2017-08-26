import { RECEIVE_SONGS } from '../actions/song_actions';
import { merge } from 'lodash';



const songReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SONGS:
      return action.songs;
    default:
      return state;
    }
};

export default songReducer;
