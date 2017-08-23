import React from 'react';

class Username extends React.Component {

  render(){
    if (this.props.currentUser){
      return (
        <div>
          <h3> { this.props.currentUser.username } </h3>
          <button onClick={ this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return ( <div></div>);
    }
  }
}



export default Username;
