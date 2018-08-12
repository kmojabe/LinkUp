# json.partial! "api/groups/group", group: @group
json.group do
  json.extract! @group, :location, :group_name, :bio
end

@group.members.each do |member|
  json.members do
    json.set! member.id do
      json.extract! member, :username, :img_url
    end
  end
end
