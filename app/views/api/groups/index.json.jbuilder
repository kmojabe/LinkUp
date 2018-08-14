@groups.each do |group|
  json.set! group.id do
    json.extract! group, :location, :group_name, :bio, :id, :moderator_id, :created_at, :img_url
  end
end
