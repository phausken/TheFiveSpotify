import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, signup, removeErrors} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if ( ownProps.location.pathname.slice(1) === 'login' ) {
    return {
    processForm: (user) => dispatch(login(user)),
    processGuest: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    };
  } else if ( ownProps.location.pathname.slice(1) === 'signup' ) {
    return {
     processForm: (user) => dispatch(signup(user)),
     processGuest: (user) => dispatch(login(user)),
     removeErrors: () => dispatch(removeErrors()),
   };
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
