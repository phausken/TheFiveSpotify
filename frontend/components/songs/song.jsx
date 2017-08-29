import React from 'react';

class Song extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deletePlaylistAdd({
      playlist_id: this.props.playlistId,
      song_id: this.props.song.id,
    });
  }

  handleDoubleClick(e){
    e.preventDefault();
    this.props.receiveCurrentSong(this.props.song);
  }



  render(){
    let deleteButton = null;
    if (this.props.removable === true){
      deleteButton = <a onClick={ this.handleDelete } >Remove from Playlist</a>;
    } else {
      deleteButton = null;
    }

    let song = this.props.song || {title: "", artist: {name: ""}};

    return(

    <div onDoubleClick={ this.handleDoubleClick } className="song-listing">
      <div className="song-listing-info">
        <h6 className="song-listing-title">{ song.title }</h6>
        <h6 className="song-listing-artist">{ song.artist.name }</h6>
      </div>
      <div className="song-listing-delete">
      { deleteButton }
      </div>
    </div>
    );
  }
}

export default Song;
