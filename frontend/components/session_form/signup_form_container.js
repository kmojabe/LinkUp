import { connect } from 'react-redux';
import { signup, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  const formType = "Sign up";
  const errors = state.errors.session;
  return {formType,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    action: user => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(msp,mdp)(SessionForm);
