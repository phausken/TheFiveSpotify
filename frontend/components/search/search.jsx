import React from 'react';
import TopNavContainer from '../main_page/top_nav';
import SongContainer from '../songs/song_container';
import PlaylistDetailContainer from '../playlists/playlist_detail_container';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
    this.props.receiveResults(e.target.value);
  }


render(){
  let songResults = this.props.results.songResults || {};
  let playlistResults = this.props.results.playlistResults || {};

  const allSongs = songResults.map((song, index) => <div  className="song-index-listing"><SongContainer key={song.id} song={ song } /></div>);
  const allPlaylists = playlistResults.map(
    (playlist) => <PlaylistDetailContainer key={playlist.id} playlist={playlist}/>);
  return (
    <div className="index">
      <div>
        <input type="text" value={ this.state.query }  onChange={ this.handleChange }></input>
      </div>
      <div>
        <ul>
          {allSongs}
        </ul>
        <ul>
          { allPlaylists }
        </ul>
      </div>
    </div>
  );
}

}

export default Search;
