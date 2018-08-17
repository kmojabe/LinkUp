import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { asArray } from '../../reducer/selectors';
import Main from './main';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const groups = asArray(state.entities);
  return {currentUser, groups};
};

const mdp = dispatch => {
  return {
    fetchGroups: (data) => dispatch(fetchGroups(data)),
  };
};

export default connect(msp,mdp)(Main);
