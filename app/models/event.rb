class Event < ApplicationRecord
  validates :location, :event_name, :event_date, :host_id, :group_id, presence: true

  belongs_to :group,
    class_name: "Group",
    foreign_key: :group_id,
    primary_key: :id

  has_many :rsvps,
    class_name: "EventAttendee"
    foreign_key: event_id,
    primary_key: :id

  has_many :attendees,
    through: :rsvps,
    source: :user
end
