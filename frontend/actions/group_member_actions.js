import * as GroupMemberUtil from '../util/group_member_api_util';

export const RECEIVE_GROUP_MEMBER = 'RECEIVE_GROUP_MEMBER';
export const CLEAR_GROUP_MEMBER = 'CLEAR_GROUP_MEMBER';

export const receiveGroupMember = ({group, member}) => ({
  type: RECEIVE_GROUP_MEMBER,
  group,
  member
});

export const clearGroupMember = ({group, member}) => ({
  type: CLEAR_GROUP_MEMBER,
  group,
  member
});

export const addGroupMember = (group_member) => dispatch => {
  return GroupMemberUtil.addGroupMember(group_member).then(
    payload => dispatch(receiveGroupMember(payload))
  );
};

export const deleteGroupMember = (group_id) => dispatch => {
  return GroupMemberUtil.deleteGroupMember(group_id).then(
    payload => dispatch(clearGroupMember(payload))
  );
};
