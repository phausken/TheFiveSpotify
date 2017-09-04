import * as APIUtil from '../util/playlist_follows_util';

export const createPlaylistFollow = playlistFollow => dispatch => {
  return APIUtil.createPlaylistFollow(playlistFollow);
};

export const deletePlaylistFollow = playlistFollow => dispatch => {
  debugger;
  return APIUtil.deletePlaylistFollow(playlistFollow);
};
