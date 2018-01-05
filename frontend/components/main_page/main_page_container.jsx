import { connect } from "react-redux";
import MainPage from "./main_page";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchSongs } from "../../actions/song_actions";

const mapDispatchToProps = dispatch => {
  return {
    requestSongs: () => dispatch(fetchSongs()),
    requestPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(null, mapDispatchToProps)(MainPage);
