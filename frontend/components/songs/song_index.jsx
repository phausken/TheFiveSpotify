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
      selected: null,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSelected = this.checkSelected.bind(this);
  }


  handleOpen(songId){
  return (e) => {
    e.preventDefault();
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

  handleSelect(playlistId, index){
    return (e) => {
      e.preventDefault();
      this.setState({
        playlist_id: playlistId,
        selected: index,
      });
    };
  }



  checkSelected(index){
    if ( this.state.selected === index ){
      return "add-playlist-modal-selected";
    } else {
      return "";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlistAdd = Object.assign({}, this.state);
    delete(playlistAdd.modalOpen);
    delete(playlistAdd.selected);
    this.props.createPlaylistAdd(playlistAdd);
    this.setState({
      song_id: "",
      playlist_id: "",
      modalOpen: false,
      selected: null,
    });
  }

  render() {

    let songArray = Object.values(this.props.songs);
    let playlistArray = Object.values(this.props.playlists);
    const allSongs = songArray.map((song, index) => <div  className="song-index-listing"><SongContainer key={song.id} song={ song } /><a onClick={this.handleOpen(song.id)}>Add to Playlist</a></div>);
    const allPlaylists = playlistArray.map((playlist, index) => <li className="add-playlist-listing" onClick={this.handleSelect(playlist.id, index)}><h5 className={ this.checkSelected(index) }>{ playlist.name }</h5></li>);

    return(

      <div className="index">
        < TopNavContainer />
        <div>
          <ol className="song-index">
            {allSongs}
          </ol >
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="add song to playlist"
          className="add-playlist-modal"
          overlayClassName="add-playlist-overlay"
          >


          <ul className="add-playlist-list">
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
