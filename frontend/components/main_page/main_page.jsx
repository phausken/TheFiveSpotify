import React from 'react';
import UsernameContainer from '../username/username_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { Route, Switch } from 'react-router-dom';


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
      <Switch>
        <Route exact path='/main_page/playlists' component={PlaylistsIndexContainer} />
        <Route path='/main_page/playlists/:playlistId' component={PlaylistShowContainer} />
      </Switch>
        <div className="now-playing-container">
        </div>
      </div>
    );
  }
}

export default MainPage;
