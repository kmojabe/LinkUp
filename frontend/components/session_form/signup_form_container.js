import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  const formType = "Sign up";
  const errors = state.errors;
  return {formType,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    action: user => dispatch(signup(user))
  };
};

export default connect(msp,mdp)(SessionForm);
