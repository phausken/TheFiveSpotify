import React from 'React';
import { Link } from 'react-router-dom';

class PlaylistDetail extends React.Component {



  render(){
    let playlistId = `/main_page/playlists/${this.props.playlist.id}`;

    return(
      <div className="playlist-detail">
      <div className="playlist-cover">
      <div className="musical-note"></div>
      </div>
      <Link to={playlistId}><h6>{this.props.playlist.name}</h6></Link>
      <h6>By {this.props.playlist.user.username}</h6>
      </div>
    );
  }


}

export default PlaylistDetail;