import React from 'React';

class PlaylistDetail extends React.Component {



  render(){
    return(
      <div className="playlist-detail">
      <h6>{this.props.playlist.name}</h6>
      <h6>By {this.props.playlist.user.username}</h6>
      </div>
    );
  }


}

export default PlaylistDetail;
