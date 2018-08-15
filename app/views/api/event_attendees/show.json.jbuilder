json.userId do
  json.extract! @user, :id
end

json.eventId do
  json.extract! @event, :id
end

json.id do
  json.extract! @event_attendee, :id
end
