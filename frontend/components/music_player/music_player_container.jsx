import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { getCurrentTrack } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentTrack: getCurrentTrack(state) || {},
    status: state.ui.status,
  };
};

export default connect(mapStateToProps, null)(MusicPlayer);
