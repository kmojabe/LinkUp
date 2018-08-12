import * as GroupUtil from '../util/group_api_util';

export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const CLEAR_GROUP_ERRORS = 'CLEAR_GROUP_ERRORS';

export const receiveGroup = ({group, members}) => ({
  type: RECEIVE_GROUP,
  group,
  members
});

export const receiveGroupErrors = (errors) => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const clearGroupErrors = () => ({
  type: CLEAR_GROUP_ERRORS,
});

export const createGroup = (group) => dispatch => {
  return GroupUtil.createGroup(group).then(
    payload => dispatch(receiveGroup(payload)),
    err => dispatch(receiveGroupErrors(err.responseJSON))
  );
};

export const fetchGroup = (id) => dispatch => {
  return GroupUtil.fetchGroup(id).then(
    payload => dispatch(receiveGroup(payload)),
    err => dispatch(receiveGroupErrors(err.responseJSON))
  );
};

export const resetGroupErrors = () => dispatch => {
  dispatch(clearGroupErrors());
};
