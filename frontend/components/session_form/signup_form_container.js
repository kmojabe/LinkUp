import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
// From mapStateToProps(state, ownProps):
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup', for each respective container
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators login or signup, again depending on the container
const msp = (state) => {
  const formType = "Sign Up";
  const errors = state.errors;
  return {formType,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    action: user => dispatch(signup(user))
  };
};

export default connect(msp,mdp)(SessionForm);
