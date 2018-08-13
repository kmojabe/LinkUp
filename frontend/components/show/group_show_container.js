import { connect } from 'react-redux';
import { fetchGroup, resetGroupErrors } from '../../actions/group_actions';
import { selectGroup } from '../../reducer/selectors';
import SessionForm from './session_form';
import Show from './show';

const msp = (state, { match }) => {
  const groupId = parseInt(match.params.groupId);
  const group = selectBench(state.entities, groupId);
  const errors = state.errors.group;
  return {group,errors};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchGroup(id)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(msp,mdp)(Show);
