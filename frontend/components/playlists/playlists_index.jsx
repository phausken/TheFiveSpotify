import React from 'react';


class PlaylistsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestPlaylists();
   }


  render(){
    debugger;

    const allPlaylists = this.props.playlists.map((playlist) => <li>{playlist.name}</li>);

    return(
      <ul>
        {allPlaylists}
      </ul>
    );
  }
}

export default PlaylistsIndex;
