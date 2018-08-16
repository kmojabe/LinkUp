json.extract! event, :id, :bio, :location, :event_name, :event_date, :group_id, :img_url, :created_at

event.users.each do |user|
  json.users do
    json.set! user.id do
      json.extract! user, :username, :img_url
    end
  end
end
