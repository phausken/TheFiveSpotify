import React from 'react';


class MusicPlayer extends React.Component {


  render(){
    debugger;
    return (
      <div className="now-playing-container">
        <button className="play-button"><i className="fa fa-play-circle-o" aria-hidden="true"></i></button>
        <progress></progress>
      </div>
    );
  }


}

export default MusicPlayer;
