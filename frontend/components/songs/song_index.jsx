import React from 'react';
import TopNavContainer from '../main_page/top_nav_container';
import SongContainer from './song_container';
import Modal from 'react-modal';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      song_id: "",
      playlist_id: "",
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOpen(songId){
  return (e) => {
    e.preventDefault();
    this.props.requestPlaylists();
    this.setState({
      modalOpen: true,
      song_id: songId,
      });
    };
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

  handleSelect(playlistId){
    return (e) => {
      e.preventDefault();
      this.setState({
        playlist_id: playlistId
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlistAdd = Object.assign({}, this.state);
    delete(playlistAdd.modalOpen);
    this.props.createPlaylistAdd(playlistAdd);
    this.setState({
      song_id: "",
      playlist_id: "",
      modalOpen: false,
    });
  }

  render() {

    let songArray = Object.values(this.props.songs);
    let playlistArray = Object.values(this.props.playlists);
    const allSongs = songArray.map((song) => <li><SongContainer key={song.id} song={ song } /><button onClick={this.handleOpen(song.id)}>Add to Playlist</button></li>);
    const allPlaylists = playlistArray.map((playlist) => <li onClick={this.handleSelect(playlist.id)}>{ playlist.name }</li>);

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
          <button onClick={this.handleSubmit}>SUBMIT</button>
          <button onClick={this.handleClose}>CANCEL</button>
        </Modal>
      </div>



    );
  }


}

export default SongIndex;
