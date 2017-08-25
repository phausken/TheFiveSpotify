import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import playlistReducer from './playlist_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  playlists: playlistReducer,
  users: userReducer,
});

export default rootReducer;
