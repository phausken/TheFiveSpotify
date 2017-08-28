import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';

class TopNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      name: "",
    };


    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen(e){
    e.preventDefault();
    this.setState({
      modalOpen: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.processForm(playlist);
    this.setState({
      modalOpen: false,
      name: "",
    });
  }

  handleClose(e){
    e.preventDefault();
    this.setState({
      modalOpen: false,
    });
  }

  handleChange(field){
    return (e) => this.setState({[field]: e.currentTarget.value });
  }

  render() {
    return(
      <nav className="top-nav">
        <ul>
          <li><NavLink activeStyle={{color: '#1db954'}} to='/main_page/playlists'>
            Playlists</NavLink></li>
          <li><NavLink activeStyle={{color: '#1db954'}} to='/main_page/songs'>Songs</NavLink></li>
          <li><button className="new-playlist-button" onClick={ this.handleOpen }>NEW PLAYLIST</button></li>
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          className="add-playlist-modal"
          overlayClassName="add-playlist-overlay"
          contentLabel="add playlist">
          <div>
            <form onSubmit={ this.handleSubmit }>
             <label>Playlist Name</label>
             <input
               type='text'
               id='name'
               onChange={this.handleChange('name')}
               value={this.state.name}/>
             <input
               type='hidden'
               value={this.props.currentId}/  >
              <button>Add Playlist</button>
            </form>
          </div>
          <button onClick={ this.handleClose }>CANCEL</button>
        </Modal>
      </nav>

    );
  }
}



export default TopNav;
