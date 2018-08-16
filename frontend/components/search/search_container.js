import { connect } from 'react-redux';
import { fetchGroups, clearGroups } from '../../actions/group_actions';
import { asArray } from '../../reducer/selectors';
import Search from './search';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const groups = asArray(state.entities);
  return {currentUser, groups};
};

const mdp = dispatch => {
  return {
    fetchGroups: (data) => dispatch(fetchGroups(data)),
    clearGroups: () => dispatch(clearGroups())
  };
};

export default connect(msp,mdp)(Search);
