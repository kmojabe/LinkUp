import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
// From mapStateToProps(state, ownProps):
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup', for each respective container
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators login or signup, again depending on the container
const msp = (state) => {
  const formType = "Log In";
  const errors = state.errors.session;
  return {formType,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    action: user => dispatch(login(user))
  };
};

export default connect(msp,mdp)(SessionForm);
