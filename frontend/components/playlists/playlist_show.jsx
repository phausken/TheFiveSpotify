import React from 'React';

class PlaylistShow extends React.Component {

  render(){
    const playlist = this.props.playlists[this.props.playlistId];
    debugger;
    return(
    <div>
    <h6>{ playlist.name }</h6>
    <h6>{ playlist.user.username }</h6>
    </div>
    );
  }
}

export default PlaylistShow;
