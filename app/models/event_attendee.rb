class EventAttendee < ApplicationRecord
  validates :user_id, :event_id, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :event,
    class_name: 'Event',
    foreign_key: :event_id,
    primary_key: :id
end
