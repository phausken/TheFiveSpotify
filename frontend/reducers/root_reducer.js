import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import playlistReducer from './playlist_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  playlists: playlistReducer
});

export default rootReducer;
