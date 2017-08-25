import React from 'react';
import PlaylistDetailContainer from './playlist_detail_container';


class PlaylistsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestPlaylists();
   }


  render(){

    const allPlaylists = this.props.playlists.map(
      (playlist) => <PlaylistDetailContainer key={playlist.id} playlist={playlist}/>);

    return(
      <div className="index">
        <nav className="top-nav">
          <ul>
            <li>Playlists</li>
            <li>Songs</li>
            <li>Artists</li>
            <li><button className="new-playlist-button">NEW PLAYLIST</button></li>
          </ul>
        </nav>
      <div className="playlist-index">
        {allPlaylists}
      </div>
    </div>
    );
  }
}

export default PlaylistsIndex;
