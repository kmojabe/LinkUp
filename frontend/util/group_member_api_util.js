export const addGroupMember = (group_member) => {
  return $.ajax({
    method: 'POST',
    url: `/api/group_members`,
    data: {group_member}
  });
};

export const deleteGroupMember = (group_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/group_members/${group_id}`,
  });
};
