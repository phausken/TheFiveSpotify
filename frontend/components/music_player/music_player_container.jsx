import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = (state) => {
  return {
    currentTrack: state.ui
  };
};

export default connect(mapStateToProps, null)(MusicPlayer);
