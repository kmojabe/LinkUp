import { connect } from 'react-redux';
import { fetchEvent, fetchEventAttendees, addEventAttendee, deleteEventAttendee } from '../../actions/event_actions';
import {fetchGroup} from '../../actions/group_actions';
import {selectEvent, selectEventAttendees} from '../../reducer/selectors';
import Show from './show';

const msp = (state, { match }) => {
  const objectId = parseInt(match.params.eventId);
  const _nullObject = null;
  const object = selectEvent(state.entities, objectId) || _nullObject;
  const typeObject = "event";
  const currentUser = state.entities.users[state.session.id];
  const user_ids = selectEventAttendees(state.entities,objectId);
  return {objectId, object, typeObject, currentUser, user_ids};
};

const mdp = (dispatch, ownProps) => {
  return {
    fetch: id => dispatch(fetchEvent(id)),
    fetchGroup: id => dispatch(fetchGroup(id)),
    follow: event_attendee => dispatch(addEventAttendee(event_attendee)),
    unfollow: event_id => dispatch(deleteEventAttendee(event_id))
  };
};

export default connect(msp,mdp)(Show);
