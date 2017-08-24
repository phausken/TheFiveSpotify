import React from 'react';
import UsernameContainer from '../username/username_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import { fetchPlaylists } from '../../actions/playlist_actions';

class MainPage extends React.Component {


  render() {
    return (
      <div className="main-page">
       <nav className="left-nav">
         < UsernameContainer />
        </nav>
        <div className="index">
          < PlaylistsIndexContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;
