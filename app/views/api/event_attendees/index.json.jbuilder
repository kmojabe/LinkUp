@event_attendees.each do |event_attendee|
  json.set! event_attendee.id do
    json.extract! event_attendee, :user_id, :event_id
  end
end
