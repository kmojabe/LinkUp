# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

people = []
locations = ["San Francisco, CA", "Los Angeles, CA", "New York, NY", "Dallas, TX", "West Lafayette, IN", "Chicago, IL"];
40.times do |i|
  people.push(User.create({username: Faker::Name.name, location: locations.sample, email: Faker::Internet.email, password: "123456"}))
end
groups = []
10.times do |i|
  groups.push(Group.create({group_name: Faker::University.greek_organization,location: locations.sample, moderator_id: people.sample.id, bio: Faker::HarryPotter.quote}))
end

30.times do |i|
  GroupMember.create({group_id: groups.sample.id, member_id: people.sample.id})
end
