import React from 'react';

class Song extends React.Component {

  render(){
    
    return(
    <div className="song-listing">
      <h6>{ this.props.song.title }</h6>
      <h6>{ this.props.song.artist.name }</h6>
    </div>
    );
  }
}

export default Song;
