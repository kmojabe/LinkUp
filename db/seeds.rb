# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

people = []
people_faces = ["https://static1.squarespace.com/static/53743a14e4b02080802971db/53868e8ae4b09e20aac5dcbc/54519565e4b05f91a2e9edc6/1414632808532/katrina-1.jpg?format=500w","https://static1.squarespace.com/static/53743a14e4b02080802971db/53868e8ae4b09e20aac5dcbc/540e5fbfe4b0bda632e4749f/1410228160838/WEB-4.jpg?format=500w","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa40d930254455.561adc2511277.jpg","https://designyoutrust.com/wp-content/uploads/2017/08/1-50.jpg","https://cdn.skim.gs/image/upload/v1456341554/msi/brad-pitt-recognising-faces_ijuvwv.jpg","https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg","https://www.designboom.com/wp-content/uploads/2014/08/ino-zeljak-stitches-two-different-people-portraits-designboom-02.jpg","http://www3.pictures.zimbio.com/gi/Rob+Lemkin+2010+Sundance+Film+Festival+Enemies+0Qmuo-p4AH5l.jpg","https://www.joancanto.com/wp-content/uploads/2017/04/H10B0527.jpg", "https://petapixel.com/assets/uploads/2015/09/IMG_3255.jpg","http://www4.pictures.gi.zimbio.com/Thomas+Cavanagh+35th+Annual+People+Choice+8OROVpcyM1nl.jpg","http://www1.pictures.zimbio.com/gi/Ashton+Kutcher+People+Choice+Awards+2010+Portraits+P4fN_G24jXil.jpg"]

locations = ["San Francisco, CA", "Los Angeles, CA", "New York, NY", "Dallas, TX", "West Lafayette, IN", "Chicago, IL"];
40.times do |i|
  people.push(User.create({username: Faker::Name.name, location: locations.sample, email: Faker::Internet.email, password: "123456", img_url: people_faces.sample, bio: Faker::Lorem.paragraphs(rand(2..8)).join(' ')}))
end
groups = []
group_img = ["https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg","https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg","https://cdn.pixabay.com/photo/2014/09/20/05/17/thailand-453393_1280.jpg","https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_1280.jpg","https://cdn.pixabay.com/photo/2016/11/23/14/51/stone-circles-1853340_1280.jpg"]
10.times do |i|
  groups.push(Group.create({group_name: Faker::Book.title,location: locations.sample, moderator_id: people.sample.id, bio: Faker::Lorem.paragraphs(rand(2..8)).join(' '), img_url: group_img.sample}))
end

35.times do |i|
  GroupMember.create({group_id: groups.sample.id, member_id: people.sample.id})
end

events = []
event_img = ["https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=yjC-dXXH","http://www.fbcsg.org/wp-content/uploads/2018/05/events.jpg","http://severalseatsllc.com/wp-content/uploads/2017/09/events-4.png","https://picnic-barcelona.com/wp-content/uploads/2016/04/picnic_pack_de_lujo_1-e1470649876250.jpg","https://cdn.thewirecutter.com/wp-content/uploads/2017/09/picnicsgrilling-2x1-fullres-top-1024x512.jpg","https://upload.wikimedia.org/wikipedia/commons/d/de/Kaj_Family_reunion_group_1988.jpg"]
20.times do |i|
  events.push(Event.create({group_id: groups.sample.id, bio: Faker::Lorem.paragraphs(rand(2..8)).join(' '), location: locations.sample, event_name: Faker::Nation.nationality, event_date: Faker::Date.between(Date.today, 15.days.from_now), img_url: event_img.sample}))
end

40.times do |i|
  EventAttendee.create({event_id: events.sample.id, user_id: people.sample.id})
end
