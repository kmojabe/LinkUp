import { connect } from 'react-redux';
import { fetchGroup, resetGroupErrors } from '../../actions/group_actions';
import { deleteGroupMember, addGroupMember } from '../../actions/group_member_actions';
import { selectGroup, selectUser } from '../../reducer/selectors';
import Show from './show';

const msp = (state, { match }) => {
  const objectId = parseInt(match.params.groupId);
  const _nullObject = null;
  const object = selectGroup(state.entities, objectId) || _nullObject;
  const errors = state.errors.group;
  const typeObject = "group";
  const currentUser = state.entities.users[state.session.id];
  return {objectId, object, errors, typeObject, currentUser};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchGroup(id)),
    resetErrors: () => dispatch(resetGroupErrors()),
    unfollow: group_id => dispatch(deleteGroupMember(group_id)),
    follow: group_id => dispatch(addGroupMember(group_id))
  };
};

export default connect(msp,mdp)(Show);
