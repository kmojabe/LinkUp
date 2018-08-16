import * as EventUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REPLACE_EVENT = 'REPLACE_EVENT';
export const CLEAR_EVENT_ATTENDEE = 'CLEAR_EVENT_ATTENDEE';
export const RECEIVE_EVENT_ATTENDEE = 'RECEIVE_EVENT_ATTENDEE';
export const RECEIVE_EVENT_ATTENDEES = 'RECEIVE_EVENT_ATTENDEES';

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const replaceEvent = (event) => ({
  type: REPLACE_EVENT,
  event
});

export const clearEventAttendee = ({eventId, userId, id}) => ({
  type: CLEAR_EVENT_ATTENDEE,
  eventId,
  userId,
  id
});

export const receiveEventAttendee = ({eventId, userId, id}) => ({
  type: RECEIVE_EVENT_ATTENDEE,
  eventId,
  userId,
  id
});

export const receiveEventAttendees = (event_attendees) => ({
  type: RECEIVE_EVENT_ATTENDEES,
  event_attendees
});

export const addEventAttendee = (event_attendee) => dispatch => {
  return EventUtil.addEventAttendee(event_attendee).then(
    event => dispatch(receiveEvent(event))
  );
};

export const fetchEvent = (id) => dispatch => {
  return EventUtil.fetchEvent(id).then(
    event => dispatch(receiveEvent(event))
  );
};

export const deleteEventAttendee = (event_id) => dispatch => {
  return EventUtil.deleteEventAttendee(event_id).then(
    event => dispatch(replaceEvent(event))
  );
};

export const fetchEventAttendees = () => dispatch => {
  return EventUtil.fetchEventAttendees().then(
    event_attendees => dispatch(receiveEventAttendees(event_attendees))
  );
};
