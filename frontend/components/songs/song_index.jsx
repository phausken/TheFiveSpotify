import React from 'react';
import TopNavContainer from '../main_page/top_nav_container';
import SongContainer from './song_container';
import Modal from 'react-modal';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);

  }


  handleOpen(e){
    e.preventDefault();
    this.props.requestPlaylists();
    this.setState({
      modalOpen: true,
    });
  }

  handleClose(e){
    e.preventDefault();
    this.setState({
      modalOpen: false,
    });
  }

  componentDidMount(){
    this.props.requestSongs();
    this.props.requestPlaylists();
  }

  handleClick(playlistId, songId) {
    return (e) => {
      console.log('some stuff');
    }
  }

  render() {
    debugger;
    let songArray = Object.values(this.props.songs);
    let playlistArray = Object.values(this.props.playlists);
    const allSongs = songArray.map((song) => <li><SongContainer key={song.id} song={ song } /><button onClick={this.handleOpen}>Add to Playlist</button></li>);
    const allPlaylists = playlistArray.map((playlist) => <li onClick={this.handleClick}>{ playlist.name }</li>);

    return(

      <div className="index">
        < TopNavContainer />
        <div>
          <ul>
            {allSongs}
          </ul>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="add song to playlist"
          className="add-playlist-modal"
          overlayClassName="add-playlist-overlay"
          >


          <ul>
            { allPlaylists }
          </ul>
          <button onClick={this.handleClose}>CANCEL</button>
        </Modal>
      </div>



    );
  }


}

export default SongIndex;
