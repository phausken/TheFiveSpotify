import { CURRENT_SONG, CURRENT_PLAYLIST, NEXT_PLAYLIST, PLAY_TRACK, PAUSE_TRACK } from '../actions/ui_actions';
import { merge } from 'lodash';



const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let currentSongId;
  let queue = [];
  let status = "";

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
    case PLAY_TRACK:
      return Object.assign({}, state, {status: "playing"});
    case PAUSE_TRACK:
      return Object.assign({}, state, {status: "paused"});
    case NEXT_PLAYLIST:
      queue = state.queue;
      if (queue.length === 0){
        return Object.assign({}, state, {currentSongId: 0, status: "", queue: []});
      } else {
        return Object.assign({}, state, {currentSongId: queue[0], status: "playing", queue: queue.slice(1)});
      }
    default:
      return state;
    }
};

export default uiReducer;
