import React from 'react';
import SongContainer from '../songs/song_container';
import { Link } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);


    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.removable = this.removable.bind(this);
  }

  handleDelete(e){
    const id = this.props.playlistId;
    this.props.deletePlaylist(id);
  }

  handlePlay(e){

    e.preventDefault();
    this.props.receiveCurrentPlaylist(this.props.playlists[this.props.playlistId]);
  }

  componentDidMount(){
    this.props.requestPlaylists().then((res) =>
    this.props.requestPlaylist(this.props.playlistId));
  }

  handleFollow(e){
    this.props.createPlaylistFollow({user_id: this.props.currentUser, playlist_id: this.props.playlistId})
  }

  handleUnfollow(e){
    this.props.deletePlaylistFollow({user_id: this.props.currentUser, playlist_id: this.props.playlistId})
  }

  playlistButton(currentUser, author, followers){
    if ( author === currentUser ){
      return (

          <Link className="playlist-button" onClick={ this.handleDelete } to='/main_page/playlists'>DELETE</Link>

        );
      } else if ( followers.includes(currentUser) ){
        return (

            <Link className="playlist-button" onClick={ this.handleUnfollow } to='/main_page/playlists'>UNFOLLOW</Link>

        );
      } else {
        return (

            <Link className="playlist-button" onClick={ this.handleFollow } to='/main_page/playlists'>FOLLOW</Link>

        );
      }
    }

    removable(){
      let playlist = this.props.playlists[this.props.playlistId] || {user_id: ""};
      if (this.props.currentUser === playlist.user_id){
        return true;
      } else {
        return false;
      }
    }

  render(){

    let allsongs;
    let songCount;
    let countWord;
    const playlistId = this.props.playlistId || {};
    const playlist = this.props.playlists[this.props.playlistId] || {name: "", songs: [""], user: {username: ""}};
    const author = playlist.user_id || "";
    const followers = playlist.followers || [];
    const currentUser = this.props.currentUser || "";
    let songs = playlist.songs || [];

    allsongs = songs.map((song) => {return <div className="song-listing-div"><SongContainer key={ song.id } playlistId={ this.props.playlistId } removable={ this.removable() } song={ song }/></div>;});
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
          <div className="show-musical-note"><i className="fa fa-music" aria-hidden="true"></i></div>
        </div>
          <div className="playlist-show-details-text">
            <h6 className="playlist-show-title">{ playlist.name }</h6>
            <h6 className="playlist-detail-text-h6">By { playlist.user.username }</h6>
            <h6 className="playlist-detail-text-h6">{ songCount } { countWord }</h6>
            <button className="playlist-play" onClick={ this.handlePlay }>PLAY</button>
            { this.playlistButton(currentUser, author, followers)  }
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
