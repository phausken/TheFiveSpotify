import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { merge } from 'lodash';



const playlistReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      const newPlaylist = {[action.playlist]: action.playlist};
      return merge({}, state, newPlaylist);
    default:
      return state;
    }
};

export default playlistReducer;
