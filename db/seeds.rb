# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative 'linkup_seeds'
require_relative 'people_faces'
csv_text = LINKUP_SEEDS

group_names = ["SF Film enthusiasts",]
people = []
people_faces = PEOPLE_FACES
locations = ["San Francisco, CA", "Los Angeles, CA", "New York, NY", "Dallas, TX", "West Lafayette, IN", "Chicago, IL"];
150.times do |i|
  people.push(User.create({username: Faker::Name.name, location: locations.sample, email: Faker::Internet.email, password: "123456", img_url: people_faces.sample, bio: Faker::Lorem.paragraphs(rand(2..8)).join(' ')}))
end
groups = []

csv_text.slice(0,400).each do |row|
  groups.push(Group.create({group_name: row[:event_title],location: locations.sample, moderator_id: people.sample.id, bio: Faker::Lorem.paragraphs(rand(6..10)).join(' '), img_url:  row[:event_image]}))
end

400.times do |i|
  GroupMember.create({group_id: groups.sample.id, member_id: people.sample.id})
end

events = []

csv_text[401..620].each do |event|
  events_group = groups.sample
  events.push(Event.create({group_id: events_group.id, bio: Faker::Lorem.paragraphs(rand(6..10)).join(' '), location: events_group.location, event_name: event[:event_title], event_date: Faker::Date.between(Date.today, 15.days.from_now), img_url: event[:event_image] }))
end

400.times do |i|
  EventAttendee.create({event_id: events.sample.id, user_id: people.sample.id})
end
