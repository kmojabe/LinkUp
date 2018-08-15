
json.extract! group, :location, :group_name, :bio, :id, :moderator_id, :created_at, :img_url

group.members.each do |member|
  json.members do
    json.set! member.id do
      json.extract! member, :username, :img_url
    end
  end
end
