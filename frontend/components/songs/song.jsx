import React from 'react';

class Song extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deletePlaylistAdd({
      playlist_id: this.props.playlistId,
      song_id: this.props.song.id,
    });
  }


  render(){
    let deleteButton = null;
    if (this.props.removable === true){
      deleteButton = <button onClick={ this.handleDelete }>Remove from Playlist</button>;
    } else {
      deleteButton = null;
    }

    let song = this.props.song || {title: "", artist: {name: ""}};

    return(

    <div className="song-listing">
      <h6>{ song.title }</h6>
      <h6>{ song.artist.name }</h6>
      { deleteButton }
    </div>
    );
  }
}

export default Song;
