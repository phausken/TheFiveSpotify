import { connect } from 'react-redux-dom';
import PlaylistsIndex from './playlists_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { getCurrentUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    playlists: getCurrentUserPlaylists(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsIndex);
