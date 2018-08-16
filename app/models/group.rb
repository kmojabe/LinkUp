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

  def self.in_town?(town)
    Group.all.select{ |group| group.location.downcase == town.downcase }
  end

  def self.filter_description(word)
    Group.all.select do |group|
      group.bio.split.map(&:downcase).include?(word.downcase)
    end
  end
  def self.filter_name(name)
    Group.all.select{ |group| group.group_name.downcase.split.include?(name.downcase) }
  end
end
