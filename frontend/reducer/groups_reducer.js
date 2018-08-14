import {RECEIVE_GROUP, RECEIVE_GROUPS} from '../actions/group_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const GroupsReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      const group = merge(action.group,{members: action.members});
      return merge({}, oldState, { [action.group.id]: group });
    default:
      return oldState;
  }
};

export default GroupsReducer;
