class GroupMember < ApplicationRecord
  validates :group_id, :member_id, presence: true

  belongs_to :group,
    class_name: 'Group',
    foreign_key: :group_id,
    primary_key: :id

  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id,
    primary_key: :id
    
end
