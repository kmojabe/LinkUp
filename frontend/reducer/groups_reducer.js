import {RECEIVE_GROUP, RECEIVE_GROUPS} from '../actions/group_actions'; //later need to add a remove user functionality
import {RECEIVE_GROUP_MEMBER, CLEAR_GROUP_MEMBER} from '../actions/group_member_actions';
import merge from 'lodash/merge';

const GroupsReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP_MEMBER:
      return merge({}, oldState, { [action.group.id]: action.group });
    case CLEAR_GROUP_MEMBER:
      const newState = merge({},oldState);
      console.log(action);
      delete newState[action.group.id].members[action.member.id];
      return merge({}, newState);
    case RECEIVE_GROUP:
      const group = merge(action.group,{members: action.members});
      return merge({}, oldState, { [action.group.id]: group });
    default:
      return oldState;
  }
};

export default GroupsReducer;
