import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(null, mapDispatchToProps)(MainPage)
