import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';



const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, action.playlist);
    case REMOVE_PLAYLIST:
      nextState = merge({}, state);
      delete nextState[action.playlist.id];
      return nextState;
    default:
      return state;
    }
};

export default playlistReducer;
