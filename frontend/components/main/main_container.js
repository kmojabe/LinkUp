import { connect } from 'react-redux';
import Main from './main';

const msp = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return {currentUser};
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp,mdp)(Main);
