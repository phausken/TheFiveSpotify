import { connect } from "react-redux";
import { fetchResults } from "../../actions/search_actions";
import { createPlaylistAdd } from "../../actions/playlist_adds_actions";

import Search from "./search";
import {
  getAllResults,
  getCurrentUserPlaylists
} from "../../reducers/selectors";

const mapStateToProps = state => {
  return {
    results: getAllResults(state),
    playlists: getCurrentUserPlaylists(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveResults: search => dispatch(fetchResults(search)),
    createPlaylistAdd: playlistAdd => dispatch(createPlaylistAdd(playlistAdd))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
