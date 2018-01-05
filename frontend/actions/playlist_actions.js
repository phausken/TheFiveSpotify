import * as APIUtil from "../util/playlist_util";

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

export const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receivePlaylist = playlist => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const removePlaylist = playlist => {
  return {
    type: REMOVE_PLAYLIST,
    playlist
  };
};

export const fetchPlaylists = () => dispatch => {
  return APIUtil.fetchPlaylists().then(playlists =>
    dispatch(receivePlaylists(playlists))
  );
};

export const fetchPlaylist = id => dispatch => {
  return APIUtil.fetchPlaylist(id).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist).then(res =>
    dispatch(receivePlaylist(res))
  );
};

export const editPlaylist = playlist => dispatch => {
  return APIUtil.editPlaylist(playlist).then(res =>
    dispatch(receivePlaylist(res))
  );
};

export const deletePlaylist = id => dispatch => {
  return APIUtil.deletePlaylist(id).then(playlist =>
    dispatch(removePlaylist(playlist))
  );
};
