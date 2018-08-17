import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';

import Footer from './footer';

const msp = (state) => {
  const currentUser = state.entities.users[state.session.id];

  return {currentUser};
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp,mdp)(Footer);
