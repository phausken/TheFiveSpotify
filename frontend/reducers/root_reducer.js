import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import playlistReducer from './playlist_reducer';
import userReducer from './user_reducer';
import songReducer from './songs_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  playlists: playlistReducer,
  users: userReducer,
  songs: songReducer,
});

export default rootReducer;
