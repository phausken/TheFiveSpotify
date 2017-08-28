import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStatetoProps = ({songs, playlists}) => {
  return {
    songs,
    playlists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSongs: () => dispatch(fetchSongs()),
    requestPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SongIndex);
