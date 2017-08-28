import { connect } from 'react-redux';
import Song from './song';
import { deletePlaylistAdd } from '../../actions/playlist_adds_actions';



const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylistAdd: (playlistAdd) => dispatch(deletePlaylistAdd(playlistAdd))
  };
};


export default connect(null, mapDispatchToProps)(Song);
