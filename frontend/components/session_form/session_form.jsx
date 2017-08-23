import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: this.props.errors
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }



  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
   this.setState({
     username: "",
     password: "",
   });
  }

  handleGuestSubmit(e){
    e.preventDefault();
    const user = ({
      username: "Guest",
      password: "password",
      errors: [],
    });
    this.setState({ user });
    this.props.processGuest(user);
  }

  handleSwitch(e){
    e.preventDefault();
    const user = ({
      username: "",
      password: "",
      errors: [],
    })
  }



  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

 render (){

    const header = (this.props.formType === 'login' ? 'Log In' : 'Sign Up');
    const altLink = (this.props.formType === 'login' ? 'Sign up here!' : 'Log in here!');
    const altMessage = (this.props.formType === 'login' ? 'Don\u0027t have an account? ' : 'Already have an account? ')
    const altPath = (this.props.formType === 'login' ? "/signup" : "/login");
    let errors;
    if (this.props.errors){
      errors = this.props.errors;
    }
    return (
      <div className="big-wrap">
        <div className="screen-login">
          {this.props.loggedIn ? <Redirect to="/main_page" /> : <div></div>}
          <h3>{ header }</h3>
          <h6 className="errors">{ errors }</h6>
          <form onSubmit= { this.handleSubmit } className="submitform">
            <label>Username</label>
            <input
              type='text'
              id='username'
              onChange={ this.handleChange('username') }
              value={ this.state.username }
              />
            <label>Password</label>
              <input
                type='password'
                id='password'
                onChange={ this.handleChange('password') }
                value={ this.state.password }
                />
              <button>Submit</button>
              <button onClick={ this.handleGuestSubmit }>Demo Login</button>
          </form>
          <span>{ altMessage }<Link to={ altPath }>{ altLink }</Link></span>
        </div>
        <div className="login-features">
          <h1 className="login-logo">Get the right music, right now</h1>
          <h2 className="login-sublogo">Listen to millions of songs for free</h2>
          <ul className="login-list">
            <li>Search and discover music you'll love</li>
            <li>Create playlists of your favorite music</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default SessionForm;
