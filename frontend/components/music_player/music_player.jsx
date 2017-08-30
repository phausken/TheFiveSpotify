import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class MusicPlayer extends React.Component {
  constructor(props){
    super(props);

    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.playButton = this.playButton.bind(this);
  }


  componentDidUpdate(nextprops){

    this.audio.load();
    this.audio.play();
  }

  handlePlay(e){
    e.preventDefault();
    this.audio.play();
  }

  handlePause(e){
    e.preventDefault();
    this.audio.pause();
  }

  playButton(){
    if (this.props.status === "playing"){
      return <button onClick={ this.handlePause } className="play-button"><i className="fa fa-pause" aria-hidden="true"></i></button>;
    } else {
      return <button onClick={ this.handlePlay } className="play-button"><i className="fa fa-play" aria-hidden="true"></i></button>;
    }
  }

  render(){


    return (
      <div className="now-playing-container">
        { this.playButton() }
        <progress></progress>

        <audio ref={(audio) => { this.audio = audio; }} autoPlay="true" id="musicPlayer">
           <source src={`${this.props.currentTrack.url}`}></source>
        </audio>

      </div>
    );
  }
}

export default MusicPlayer;
