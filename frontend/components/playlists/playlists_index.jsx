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
      <div className="playlist-index">
        {allPlaylists}
      </div>
    );
  }
}

export default PlaylistsIndex;
