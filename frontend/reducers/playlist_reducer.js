import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { merge } from 'lodash';



const playlistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      const newPlaylist = action.playlist;
      return Object.assign({}, state, newPlaylist);
    default:
      return state;
    }
};

export default playlistReducer;
