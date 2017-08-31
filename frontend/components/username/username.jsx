import React from 'react';

class Username extends React.Component {

  render(){
    if (this.props.currentUser){
      return (
        <div className="username">
          <div className="logo-username">
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <h3 className="username-display"> { this.props.currentUser.username } </h3>
          </div>
        <button className="logout" onClick={ this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return ( <div></div>);
    }
  }
}



export default Username;
