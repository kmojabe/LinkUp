# json.partial! "api/groups/group", group: @group
json.group do
  json.extract! @group, :location, :group_name, :bio, :id, :moderator_id, :created_at, :img_url
end

@group.members.each do |member|
  json.members do
    json.set! member.id do
      json.extract! member, :username, :img_url
    end
  end
end

@group.events.each do |event|
  json.events do
    json.set! event.id do
      json.extract! event, :event_name, :img_url, :event_date
    end
  end
end
