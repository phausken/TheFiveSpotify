import React from 'react';
import PlaylistDetail from './playlist_detail';


class PlaylistsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestPlaylists();
   }


  render(){

    const allPlaylists = this.props.playlists.map((playlist) => <PlaylistDetail key={playlist.id} playlist={playlist}></PlaylistDetail>);

    return(
      <div>
        {allPlaylists}
      </div>
    );
  }
}

export default PlaylistsIndex;
