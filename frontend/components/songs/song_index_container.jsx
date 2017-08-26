import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';

const mapStatetoProps = ({songs}) => {
  return {
    songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSongs: () => dispatch(fetchSongs())
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SongIndex);
