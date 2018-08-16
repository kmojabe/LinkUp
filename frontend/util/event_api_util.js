export const fetchEvent = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/events/${id}`
  });
};

export const addEventAttendee = (event_attendee) => {
  return $.ajax({
    method: 'POST',
    url: `/api/event_attendees`,
    data: {event_attendee}
  });
};

export const deleteEventAttendee = (event_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/event_attendees/${event_id}`,
  });
};

export const fetchEventAttendees = () => {
  return $.ajax({
    method: 'GET',
    url: `api/event_attendees`
  });
};
