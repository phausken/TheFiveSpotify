import { connect } from "react-redux";
import PlaylistDetail from "./playlist_detail";
import { fetchUser } from "../../actions/user_actions";

const mapDispatchToProps = dispatch => {
  return {
    requestUser: id => dispatch(fetchUser(id))
  };
};

export default connect(null, mapDispatchToProps)(PlaylistDetail);
