import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import {selectEvent} from '../../reducer/selectors';
import Show from './show';

const msp = (state, { match }) => {
  const objectId = parseInt(match.params.eventId);
  const _nullObject = null;
  const object = selectEvent(state.entities, objectId) || _nullObject;
  const typeObject = "event";
  const currentUser = state.entities.users[state.session.id];
  return {objectId, object, typeObject, currentUser};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchEvent(id))
  };
};

export default connect(msp,mdp)(Show);
