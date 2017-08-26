import React from 'react';

class Song extends React.Component {

  render(){
    debugger;
    return(
    <div className="song-listing">
      <h6>{ this.props.song.title }</h6>
      <h6>{ this.props.song.artist_id }</h6>
    </div>
    );
  }
}

export default Song;
