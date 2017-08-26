import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {



  render() {
    return(

      <nav className="top-nav">
        <ul>
          <li><Link to='/main_page/playlists'>Playlists</Link></li>
          <li><Link to='/main_page/songs'>Songs</Link></li>
          <li>Artists</li>
          <li><button className="new-playlist-button">NEW PLAYLIST</button></li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
