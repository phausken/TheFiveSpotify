import React from 'react';
import TopNav from '../main_page/top_nav';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.requestSongs();
  }

  render() {
    debugger;
    return(
      <div>
        < TopNav />
        <h1>Test!</h1>

        </div>
    );
  }


}

export default SongIndex;
