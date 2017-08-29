import React from 'react';
import SongContainer from '../songs/song_container';
import { Link } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);


    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleDelete(e){
    const id = this.props.playlistId;
    this.props.deletePlaylist(id);
  }

  handlePlay(e){

    e.preventDefault()
    this.props.receiveCurrentPlaylist(this.props.playlists[this.props.playlistId]);
  }

  componentDidMount(){
    this.props.requestPlaylists().then((res) =>
    this.props.requestPlaylist(this.props.playlistId));
  }

  render(){

    let allsongs;
    let songCount;
    let countWord;
    const playlistId = this.props.playlistId || {};
    const playlist = this.props.playlists[this.props.playlistId] || {name: "", songs: [""], user: {username: ""}};
    let songs = playlist.songs || [];
    allsongs = songs.map((song) => {return <li><SongContainer key={ song.id } playlistId={ this.props.playlistId } removable={ true } song={ song }/></li>;});
    songCount = songs.length;


      if (songCount === 1){
        countWord = 'song';
      } else {
        countWord = 'songs';
      }

    return(
    <div className="playlist-show">
      <div className="playlist-show-details-container">
        <div className="playlist-show-cover">
          <div className="show-musical-note"></div>
        </div>
          <div className="playlist-show-details-text">
            <h6 className="playlist-show-title">{ playlist.name }</h6>
            <h6 className="playlist-detail-text-h6">By { playlist.user.username }</h6>
            <h6 className="playlist-detail-text-h6">{ songCount } { countWord }</h6>
            <button onClick={ this.handlePlay }>PLAY</button>
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
