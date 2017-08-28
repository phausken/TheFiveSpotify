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
  }

  render() {

    let songArray = Object.values(this.props.songs);
    const allSongs = songArray.map((song) => <li><SongContainer key={song.id} song={ song } /><button onClick={this.handleOpen}>Add to Playlist</button></li>);


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
          <h1>Test!</h1>
          <button onClick={this.handleClose}></button>
        </Modal>
      </div>



    );
  }


}

export default SongIndex;
