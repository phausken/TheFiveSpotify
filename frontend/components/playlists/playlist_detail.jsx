import React from 'React';

class PlaylistDetail extends React.Component {



  render(){
    return(
      <div>
      <h6>{this.props.playlist.name}</h6>
      <h6>By current user!</h6>
      </div>
    );
  }


}

export default PlaylistDetail;
