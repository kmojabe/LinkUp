# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

people = []
people_faces = ["https://static1.squarespace.com/static/53743a14e4b02080802971db/53868e8ae4b09e20aac5dcbc/54519565e4b05f91a2e9edc6/1414632808532/katrina-1.jpg?format=500w","https://static1.squarespace.com/static/53743a14e4b02080802971db/53868e8ae4b09e20aac5dcbc/540e5fbfe4b0bda632e4749f/1410228160838/WEB-4.jpg?format=500w","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa40d930254455.561adc2511277.jpg","https://designyoutrust.com/wp-content/uploads/2017/08/1-50.jpg","http://cdn.playbuzz.com/cdn//4c12b264-199e-4e8e-8f19-b35e400776d2/0159c7fa-8c64-4f81-8a77-29e5416c0ba3.jpg","https://cdn.skim.gs/image/upload/v1456341554/msi/brad-pitt-recognising-faces_ijuvwv.jpg","https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"]
locations = ["San Francisco, CA", "Los Angeles, CA", "New York, NY", "Dallas, TX", "West Lafayette, IN", "Chicago, IL"];
40.times do |i|
  people.push(User.create({username: Faker::Name.name, location: locations.sample, email: Faker::Internet.email, password: "123456", img_url: people_faces.sample}))
end
groups = []
group_img = ["https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg","https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg","https://cdn.pixabay.com/photo/2014/09/20/05/17/thailand-453393_1280.jpg","https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_1280.jpg","https://cdn.pixabay.com/photo/2016/11/23/14/51/stone-circles-1853340_1280.jpg"]
10.times do |i|
  groups.push(Group.create({group_name: Faker::Book.title,location: locations.sample, moderator_id: people.sample.id, bio: Faker::Lorem.paragraphs(rand(2..8)).join('\n'), img_url: group_img.sample}))
end

30.times do |i|
  GroupMember.create({group_id: groups.sample.id, member_id: people.sample.id})
end
