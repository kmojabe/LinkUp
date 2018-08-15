import { connect } from 'react-redux';
import { fetchUser, resetErrors } from '../../actions/session_actions';
import { selectUser } from '../../reducer/selectors';
import Show from './show';

const msp = (state, { match }) => {
  const objectId = parseInt(match.params.userId);
  const _nullObject = null;
  const object = selectUser(state.entities, objectId) || _nullObject;
  const errors = state.errors.session;
  const typeObject = "user";
  const currentUser = state.entities.users[state.session.id];
  return {objectId, object, errors, typeObject, currentUser};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchUser(id)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(msp,mdp)(Show);
