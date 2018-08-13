import { connect } from 'react-redux';
import { fetchGroup, resetGroupErrors } from '../../actions/group_actions';
import { selectGroup, selectUser } from '../../reducer/selectors';
import Show from './show';

const msp = (state, { match }) => {
  const objectId = parseInt(match.params.groupId);
  const _nullObject = null;
  const object = selectGroup(state.entities, objectId) || _nullObject;
  const errors = state.errors.group;
  const typeObject = "group";
  return {objectId, object, errors, typeObject};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchGroup(id)),
    resetErrors: () => dispatch(resetGroupErrors())
  };
};

export default connect(msp,mdp)(Show);
