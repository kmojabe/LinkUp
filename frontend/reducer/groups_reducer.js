import {RECEIVE_GROUP} from '../actions/group_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const GroupsReducer = (oldState={},action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      console.log(action);
      const group = merge(action.group,{members: action.members});
      return merge({}, oldState, { [action.group.id]: group });
    default:
      return oldState;
  }
};

export default GroupsReducer;
