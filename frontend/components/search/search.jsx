import React from 'react';
import TopNavContainer from '../main_page/top_nav';
import SongContainer from '../songs/song_container';
import PlaylistDetailContainer from '../playlists/playlist_detail_container';
import Modal from 'react-modal';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: "",
      modalOpen: false,
      song_id: "",
      playlist_id: "",
      selected: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.checkSelected = this.checkSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
    this.props.receiveResults(e.target.value);
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
    delete(playlistAdd.query);
    this.props.createPlaylistAdd(playlistAdd);
    this.setState({
      song_id: "",
      playlist_id: "",
      modalOpen: false,
      selected: null,
    });
  }


render(){
  let songResults = this.props.results.songResults || {};
  let playlistResults = this.props.results.playlistResults || {};
  let playlistArray = Object.values(this.props.playlists);

  const allSongs = songResults.map((song, index) => <div  className="song-index-listing"><SongContainer key={song.id} song={ song } /><a onClick={this.handleOpen(song.id)}>Add to Playlist</a></div>);
  const allPlaylists = playlistResults.map(
    (playlist) => <PlaylistDetailContainer key={playlist.id} playlist={playlist}/>);
  const allUserPlaylists = playlistArray.map((playlist, index) => <li className="add-playlist-listing" onClick={this.handleSelect(playlist.id, index)}><h5 className={ this.checkSelected(index) }>{ playlist.name }</h5></li>);


  return (
    <div className="index">
      <div>
        <input type="text" value={ this.state.query }  onChange={ this.handleChange }></input>
      </div>
      <div>
        <ul>
          {allSongs}
        </ul>
        <div className="search-result-playlists">
          { allPlaylists }
        </div>
      </div>

      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="add song to playlist"
        className="add-playlist-modal"
        overlayClassName="add-playlist-overlay"
        >


        <ul className="add-playlist-list">
          { allUserPlaylists }
        </ul>
        <button onClick={this.handleSubmit}>SUBMIT</button>
        <button onClick={this.handleClose}>CANCEL</button>
      </Modal>


    </div>
  );
}

}

export default Search;
