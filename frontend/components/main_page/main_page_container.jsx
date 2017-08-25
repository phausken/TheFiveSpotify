import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    requestPlaylists: () => dispatch(fetchPlaylists()),
    requestUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(null, mapDispatchToProps)(MainPage)
