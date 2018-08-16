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

export const fetchGroups = (data) => {
  return $.ajax({
    method: 'GET',
    url: `api/groups`,
    data
  });
};
