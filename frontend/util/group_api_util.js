export const createGroup = (group) => {
  return $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: {group}
  });
};

export const fetchGroup = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  });
};

export const fetchGroups = () => {
  return $.ajax({
    method: 'GET',
    url: `api/groups`
  });
};

export const addGroupMember = (group_id,user_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/group_members`,
    data: {group_id, user_id}
  });
};
