import React from 'react';
import UsernameContainer from './username/username_container';

class MainPage extends React.Component {

  render() {
    return (
     <header className="main-page">
      <h1>The Five Spotify</h1>
      <nav><UsernameContainer /></nav>
      </header>
    );
  }
}

export default MainPage;
