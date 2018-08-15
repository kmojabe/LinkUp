json.member do
  json.partial! "api/users/user", user: @user
end

json.group do
  json.partial! "api/groups/group", group: @group
end
