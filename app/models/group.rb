class Group < ApplicationRecord
  validates :group_name, :location, :moderator_id, :bio, presence: true

  belongs_to :moderator,
    class_name: 'User',
    foreign_key: :moderator_id,
    primary_key: :id

  has_many :memberships,
    class_name: 'GroupMember',
    foreign_key: :group_id,
    primary_key: :id

  has_many :members,
    through: :memberships,
    source: :member

  has_many :events,
    class_name: 'Event',
    foreign_key: :group_id,
    primary_key: :id

end
