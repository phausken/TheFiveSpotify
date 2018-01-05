import { connect } from "react-redux";
import Song from "./song";
import { deletePlaylistAdd } from "../../actions/playlist_adds_actions";
import {
  receiveCurrentSong,
  pauseTrack,
  playTrack
} from "../../actions/ui_actions";

const mapStateToProps = state => {
  return {
    currentSongId: state.ui.currentSongId,
    status: state.ui.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylistAdd: playlistAdd => dispatch(deletePlaylistAdd(playlistAdd)),
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrack: () => dispatch(playTrack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
