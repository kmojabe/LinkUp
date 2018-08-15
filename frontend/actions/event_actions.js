import * as EventUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const CLEAR_EVENT_ATTENDEE = 'CLEAR_EVENT_ATTENDEE';
export const RECEIVE_EVENT_ATTENDEE = 'RECEIVE_EVENT_ATTENDEE';

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
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

export const addEventAttendee = (event_attendee) => dispatch => {
  return EventUtil.addEventAttendee(event_attendee).then(
    payload => dispatch(receiveEvent(payload))
  );
};

export const fetchEvent = (id) => dispatch => {
  return EventUtil.fetchEvent(id).then(
    event => dispatch(receiveEvent(event))
  );
};

export const deleteEventAttendee = (event_id) => dispatch => {
  return EventUtil.deleteEventAttendee(event_id).then(
    payload => dispatch(clearEventAttendee(payload))
  );
};
