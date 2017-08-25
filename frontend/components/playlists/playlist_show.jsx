import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {

  componentDidMount(){
    this.props.requestPlaylists().then(
    this.props.requestPlaylist(this.props.playlistId));
  }

  render(){
    let allsongs;
    let songCount;
    let countWord;
    const playlist = this.props.playlists[this.props.playlistId];
    if (playlist.songs){
     allsongs = playlist.songs.map((song) => {return <li>{song.title} by ~Artist~</li>;});
      songCount = playlist.songs.length;
    }

    if (songCount === 1){
      countWord = 'song'
    } else {
      countWord = 'songs'
    }

    return(
    <div className="playlist-show">
      <div className="playlist-show-details-container">
        <div className="playlist-show-cover">
          <div className="show-musical-note"></div>
        </div>
        <div className="playlist-show-details-text">
          <h6 className="playlist-show-title">{ playlist.name }</h6>
          <h6>{ songCount } { countWord }</h6>
          <h6>By { playlist.user.username }</h6>
          </div>
          <form onSubmit{}>
            <submit>DELETE</submit>
          </form>
      </div>
      <div className="playlist-show-songs">
          <ol>
            { allsongs }
          </ol>
      </div>
    </div>
    );
  }
}

export default PlaylistShow;
