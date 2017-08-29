import { CURRENT_SONG, CURRENT_PLAYLIST } from '../actions/ui_actions';
import { merge } from 'lodash';



const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let currentSongId;
  let queue = [];

  switch(action.type){
    case CURRENT_SONG:
      return {
        currentSongId: action.song.id,
        status: "playing",
        queue: []
      };
    case CURRENT_PLAYLIST:

        currentSongId = action.playlist.songs[0].id;
        for (let i = 1; i < action.playlist.songs.length; i++){
          queue.push(action.playlist.songs[i].id);
        }

        return {
          currentSongId,
          status: "playing",
          queue,
      };
    default:
      return state;
    }
};

export default uiReducer;
