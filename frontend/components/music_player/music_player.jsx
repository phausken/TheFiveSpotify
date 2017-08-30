import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class MusicPlayer extends React.Component {

  // componentDidMount(){
  //   if (this.props.currentTrack){
  //   this.audio.src = this.props.currentTrack.url;
  //   this.audio.play();
  //   }
  // }

  componentDidUpdate(nextprops){
    // if (nextprops.currentTrack.id !== this.props.currentTrack.id){
    //   this.audio.src = nextprops.currentTrack.url;
    // }

    this.audio.load();
    this.audio.play();
  }



  render(){


    return (
      <div className="now-playing-container">
        <button className="play-button"><i className="fa fa-play-circle-o" aria-hidden="true"></i></button>
        <progress></progress>

        <audio ref={(audio) => { this.audio = audio; }} autoPlay="true" id="musicPlayer">
           <source src={`${this.props.currentTrack.url}`}></source>
        </audio>

      </div>
    );
  }
}

export default MusicPlayer;
