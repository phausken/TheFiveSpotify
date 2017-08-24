import React from 'react';
import UsernameContainer from './username/username_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
     <header className="main-page">
      <h1>The Five Spotify</h1>
      <nav><UsernameContainer /></nav>
      </header>
      <div>
        <PlaylistsIndex /> 
      </div>
      </div>
    );
  }
}

export default MainPage;
