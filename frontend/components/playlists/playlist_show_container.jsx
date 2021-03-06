import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import {
  fetchPlaylist,
  fetchPlaylists,
  deletePlaylist
} from "../../actions/playlist_actions";
import { fetchSongs } from "../../actions/song_actions";
import { withRouter } from "react-router-dom";
import { getAllPlaylists, getAllSongs } from "../../reducers/selectors";
import { receiveCurrentPlaylist } from "../../actions/ui_actions";
import {
  createPlaylistFollow,
  deletePlaylistFollow
} from "../../actions/playlist_follows_actions";

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);
  return {
    playlists: getAllPlaylists(state),
    playlistId,
    songs: getAllSongs(state),
    currentUser: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists()),
    requestPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    receiveCurrentPlaylist: playlist =>
      dispatch(receiveCurrentPlaylist(playlist)),
    createPlaylistFollow: playlistFollow =>
      dispatch(createPlaylistFollow(playlistFollow)),
    deletePlaylistFollow: playlistFollow =>
      dispatch(deletePlaylistFollow(playlistFollow))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlaylistShow)
);
