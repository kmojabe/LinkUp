class Event < ApplicationRecord
  validates :location, :event_name, :event_date, :group_id, presence: true

  belongs_to :group,
    class_name: "Group",
    foreign_key: :group_id,
    primary_key: :id

  has_many :user_attendees,
    class_name: "EventAttendee",
    foreign_key: :event_id,
    primary_key: :id

  has_many :users,
    through: :user_attendees,
    source: :user
end
