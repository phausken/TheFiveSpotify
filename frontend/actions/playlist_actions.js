import * as APIUtil from '../util/playlist_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists,
  };
};

export const receivePlaylist = (playlist) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const fetchPlaylists = () => dispatch => {
  debugger
  return APIUtil.fetchPlaylists()
  .then(playlists => dispatch(receivePlaylists(playlists)));
};

export const fetchPlaylist = id => dispatch => {
  return APIUtil.fetchPlaylist(id)
  .then(playlist => dispatch(receivePlaylist(playlist)));
};
