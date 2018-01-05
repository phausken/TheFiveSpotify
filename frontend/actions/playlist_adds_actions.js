import * as APIUtil from "../util/playlist_adds_util";
import { receivePlaylist } from "./playlist_actions";

export const createPlaylistAdd = playlistAdd => dispatch => {
  return APIUtil.createPlaylistAdd(playlistAdd).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};

export const deletePlaylistAdd = playlistAdd => dispatch => {
  return APIUtil.deletePlaylistAdd(playlistAdd).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );
};
