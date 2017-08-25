import React from 'react';
import UsernameContainer from '../username/username_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { Route, Switch, Link } from 'react-router-dom';


class MainPage extends React.Component {

  componentDidMount(){
    this.props.requestUsers();
  }

  render() {
    return (
      <div className="main-page">
        <div className="left-nav-container">
          <div className="left-nav">
            <nav className="left-nav-top">
              <h3>Search</h3>
              <Link to='/main_page/playlists'><h3>Your Music</h3></Link>
            </nav>
            <nav className="left-nav-username">
              < UsernameContainer />
            </nav>
            </div>
          </div>
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
