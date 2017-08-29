import { connect } from 'react-redux';
import Song from './song';
import { deletePlaylistAdd } from '../../actions/playlist_adds_actions';
import { receiveCurrentSong } from '../../actions/ui_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    deletePlaylistAdd: (playlistAdd) => dispatch(deletePlaylistAdd(playlistAdd)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
  };
};


export default connect(null, mapDispatchToProps)(Song);
