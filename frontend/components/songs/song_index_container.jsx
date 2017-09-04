import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { createPlaylistAdd } from '../../actions/playlist_adds_actions';
import { getCurrentAuthorPlaylists } from '../../reducers/selectors';
import { receiveCurrentSong } from '../../actions/ui_actions';

const mapStatetoProps = (state) => {
  return {
    songs: state.songs,
    playlists: getCurrentAuthorPlaylists(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSongs: () => dispatch(fetchSongs()),
    requestPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylistAdd: (playlistAdd) => dispatch(createPlaylistAdd(playlistAdd)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SongIndex);
