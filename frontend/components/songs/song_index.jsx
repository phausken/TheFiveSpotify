import React from 'react';
import TopNavContainer from '../main_page/top_nav_container';
import Song from './song';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.requestSongs();
  }

  render() {
    debugger;
    let songArray = Object.values(this.props.songs);
    const allSongs = songArray.map((song) => <li><Song key={song.id} song={ song } /></li>);


    return(

      <div className="index">
        < TopNavContainer />
        <div>
          <ul>
            {allSongs}
          </ul>
        </div>
      </div>
    );
  }


}

export default SongIndex;
