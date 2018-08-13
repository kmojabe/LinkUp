import { connect } from 'react-redux';
import { createGroup, resetGroupErrors } from '../../actions/group_actions';
import GroupForm from './group_form';

const msp = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const errors = state.errors.group;
  return {currentUser,errors};
};

const mdp = dispatch => {
  return {
    action: group => dispatch(createGroup(group)),
    resetGroupErrors: () => dispatch(resetGroupErrors())
  };
};

export default connect(msp,mdp)(GroupForm);
