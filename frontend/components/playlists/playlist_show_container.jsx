import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import { getAllPlaylists } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.location.pathname.slice(21, 23));
  return {
    playlists: getAllPlaylists(state),
    playlistId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists()),
    requestPlaylist: (id) => dispatch(fetchPlaylist(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShow));
