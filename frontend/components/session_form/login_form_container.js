import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  const formType = "Log in";
  const errors = state.errors.session;
  return {formType,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    action: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(msp,mdp)(SessionForm);
