import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
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

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

 render (){
    const header = (this.props.formType === 'login' ? 'Log In' : 'Sign Up');
    const altLink = (this.props.formType === 'login' ? 'Sign Up' : 'Log In');
    const altPath = (this.props.formType === 'login' ? "/signup" : "/login");
    let errors;
    if (this.props.errors){
      errors = this.props.errors;
    }
    return (
      <div>
        {this.props.loggedIn ? <Redirect to="/" /> : <div></div>}
        <h3>{ header }</h3>
        <h6>{ errors }</h6>
        <form onSubmit= { this.handleSubmit }>
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
            <button>Submit!</button>
        </form>
        <Link to={ altPath }>{ altLink }</Link>
      </div>
    );
  }

}

export default SessionForm;
