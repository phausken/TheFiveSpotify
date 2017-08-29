import { connect } from 'react-redux';
import PlaylistsIndex from './playlists_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { getCurrentUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => {

  const userPlaylists = {
    playlists: getCurrentUserPlaylists(state),
  };
  return userPlaylists;
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsIndex);
