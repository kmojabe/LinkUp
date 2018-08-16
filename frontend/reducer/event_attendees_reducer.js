import {RECEIVE_EVENT_ATTENDEE, CLEAR_EVENT_ATTENDEE, RECEIVE_EVENT_ATTENDEES} from '../actions/event_actions';
import merge from 'lodash/merge';

const EventAttendeesReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EVENT_ATTENDEE:
      return merge({},oldState,{[action.id]: {userId: action.userId, eventId: action.eventId }});
    case RECEIVE_EVENT_ATTENDEES:
      return action.event_attendees;
    case CLEAR_EVENT_ATTENDEE:
      const newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default EventAttendeesReducer;
