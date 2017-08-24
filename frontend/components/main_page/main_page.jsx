import React from 'react';
import UsernameContainer from '../username/username_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import { fetchPlaylists } from '../../actions/playlist_actions';

class MainPage extends React.Component {


  render() {
    return (
      <div>
     <header className="main-page">
      <h1>The Five Spotify</h1>
      <nav><UsernameContainer /></nav>
      </header>
      <div>
        < PlaylistsIndexContainer />
      </div>
      </div>
    );
  }
}

export default MainPage;
