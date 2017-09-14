import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { playTrack, pauseTrack, nextPlaylist, previousPlaylist } from '../../actions/ui_actions';
import { getCurrentTrack } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentTrack: getCurrentTrack(state) || {},
    status: state.ui.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    nextPlaylist: () => dispatch(nextPlaylist()),
    previousPlaylist: () => dispatch(previousPlaylist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
