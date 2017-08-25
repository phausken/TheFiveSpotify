import React from 'react';
import UsernameContainer from '../username/username_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import { fetchPlaylists } from '../../actions/playlist_actions';


class MainPage extends React.Component {

  componentDidMount(){
    this.props.requestUsers();
  }

  render() {
    return (
      <div className="main-page">
       <nav className="left-nav">
         < UsernameContainer />
        </nav>
        <div className="index">
          <nav className="top-nav">
            <ul>
              <li>Playlists</li>
              <li>Songs</li>
              <li>Artists</li>
              <li><button className="new-playlist-button">NEW PLAYLIST</button></li>
            </ul>
          </nav>
          < PlaylistsIndexContainer />
        </div>
        <div className="now-playing-container">
          <nav></nav>
        </div>
      </div>
    );
  }
}

export default MainPage;
