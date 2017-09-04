import * as APIUtil from '../util/playlist_follows_util';

export const createPlaylistFollow = playlistFollow => dispatch => {
  return APIUtil.createPlaylistFollow(playlistFollow);
};

export const deletePlaylistFollow = playlistFollow => dispatch => {
  return APIUtil.deletePlaylistFollow(playlistFollow);
};
