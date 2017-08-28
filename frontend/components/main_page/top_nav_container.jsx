import { connect } from "react-redux";
import TopNav from './top_nav';
import createPlaylist from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  const currentId = state.session.currentUser.id;
  return {
    currentId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (playlist) => dispatch(createPlaylist(playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
