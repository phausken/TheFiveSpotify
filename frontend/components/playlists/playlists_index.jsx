import React from 'react';
import PlaylistDetailContainer from './playlist_detail_container';
import TopNav from '../main_page/top_nav';


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
        <div className="top-nav">
      < TopNav />
      </div>
      <div className="playlist-index">
        {allPlaylists}
      </div>
    </div>
    );
  }
}

export default PlaylistsIndex;
