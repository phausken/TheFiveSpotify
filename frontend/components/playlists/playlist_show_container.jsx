import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, fetchPlaylists, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { withRouter } from 'react-router-dom';
import { getAllPlaylists, getAllSongs } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {

  const playlistId = parseInt(ownProps.match.params.playlistId);
  return {
    playlists: getAllPlaylists(state),
    playlistId,
    songs: getAllSongs(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists()),
    requestPlaylist: (id) => dispatch(fetchPlaylist(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    requestSongs: () => dispatch(fetchSongs()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShow));
