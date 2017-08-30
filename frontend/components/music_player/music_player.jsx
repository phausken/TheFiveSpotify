import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class MusicPlayer extends React.Component {
  constructor(props){
    super(props);

    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.playButton = this.playButton.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }


  componentDidUpdate(nextprops){

    if (this.props.currentTrack.id !== nextprops.currentTrack.id){
    this.audio.load();
    this.audio.play();
    }
  }

  handleNext(e){
    e.preventDefault;
    this.props.nextPlaylist();
  }

  handlePlay(e){

    e.preventDefault();

    this.props.playTrack();
    this.audio.play();
  }

  handlePause(e){
    e.preventDefault();
    this.audio.pause();
    this.props.pauseTrack();
  }

  playButton(){
    if (this.props.status === "playing"){
      return <button onClick={ this.handlePause } className="play-button"><i className="fa fa-pause" aria-hidden="true"></i></button>;
    } else {
      return <button onClick={ this.handlePlay } className="play-button"><i className="fa fa-play" aria-hidden="true"></i></button>;
    }
  }



  setVolume(){
    this.audio.volume = this.volume.value;
  }

  render(){
    let trackName = this.props.currentTrack.title || "";
    let artistName = this.props.currentTrack.artist || {name: ""};
    return (
      <div className="now-playing-container">
        <div className="now-playing-track-info">
          <h6>{ trackName }</h6>
          <h6>{ artistName.name }</h6>
        </div>
        { this.playButton() }
        <progress onClick={ this.handleSeek } ref={(progress) => {this.progress = progress;} } min="0" max="100" value="0"></progress>
        <input onChange={ this.setVolume } ref={(volume) => {this.volume = volume; } } min="0" max="1" step="0.1" type="range"/>
        <audio onEnded={ this.handleNext } ref={(audio) => { this.audio = audio; } } autoPlay="true" src={ `${this.props.currentTrack.url}` } id="musicPlayer">
           <source src={`${this.props.currentTrack.url}`}></source>
        </audio>

      </div>
    );
  }
}

export default MusicPlayer;
