import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class MusicPlayer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      time: 0
    };

    this.audio = this.audio || {currentTime: "", duration: ""};

    this.updateTime = this.updateTime.bind(this);
    this.setState = this.setState.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.playButton = this.playButton.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.parseTime = this.parseTime.bind(this);
  }

  updateTime(){
    return this.setState({time: this.audio.currentTime});
  }

  componentDidMount(){
    setInterval(this.updateTime, 50);
  }

  componentDidUpdate(nextprops){

    if (this.props.currentTrack.id !== nextprops.currentTrack.id){
    this.audio.pause();
    this.audio.load();
    this.audio.play();
  } else if ( this.props.status === "paused"){
    this.audio.pause();
  } else if ( this.props.status === "playing"){
    this.audio.play();
  }

  }

  handleNext(e){
    e.preventDefault;
    this.props.nextPlaylist();
  }

  parseTime(time){
    time = time || 0;
    let seconds = Math.floor(time) % 60;
    let minutes = Math.floor(time / 60);

    if (time < 10){
      return `0:0${seconds}`;
    } else if (time < 60 ) {
      return `0:${seconds}`;
    } else if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
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
        <div className="progress-time">
          <h6>{ this.parseTime(this.audio.currentTime) }</h6>
          <div className="button-progress">
            { this.playButton() }
          <div style={{width: "642px"}}className="progress-bar-container">
            <div className="progress-bar" style={{width: `${642 * (this.audio.currentTime / (this.audio.duration || 1))}`}}/></div>

      </div>
      <h6>{ this.parseTime(this.audio.duration) }</h6>
        </div>
        <div><i className="fa fa-volume-up" aria-hidden="true"></i><input onChange={ this.setVolume } ref={(volume) => {this.volume = volume; } } min="0" max="1" step="0.1" type="range"/></div>
          <audio onEnded={ this.handleNext } ref={(audio) => { this.audio = audio; } } autoPlay="true" src={ `${this.props.currentTrack.url}` } id="musicPlayer">
           <source src={`${this.props.currentTrack.url}`}></source>
        </audio>

        </div>
    );
  }
}

export default MusicPlayer;
