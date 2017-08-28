import React from 'react';
import Song from '../songs/song';
import { Link } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistName: "",
      username: "",
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    const id = this.props.playlistId;
    this.props.deletePlaylist(id);
  }

  componentDidMount(){
    this.props.requestPlaylists().then((res) =>
    this.props.requestPlaylist(this.props.playlistId));
    this.props.requestSongs();
  }

  render(){
    debugger;
    let allsongs;
    let songCount;
    let countWord;
    const playlistId = this.props.playlistId;
    const playlist = this.props.playlists[this.props.playlistId];
    if (playlist){
      if (playlist.songs){
       allsongs = playlist.songs.map((song) => {return <li><Song key={song.id } song={song}/></li>;});
        songCount = playlist.songs.length;
      }

      if (songCount === 1){
        countWord = 'song';
      } else {
        countWord = 'songs';
      }
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
            <form onSubmit={ this.handleDelete }>
              <Link onClick={ this.handleDelete } to='/main_page/playlists'>DELETE</Link>
              </form>
          </div>
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
