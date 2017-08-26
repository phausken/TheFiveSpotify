import React from 'react';

class TopNav extends React.Component {



  render() {
    return(

      <nav className="top-nav">
        <ul>
          <li>Playlists</li>
          <li>Songs</li>
          <li>Artists</li>
          <li><button className="new-playlist-button">NEW PLAYLIST</button></li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
