import {RECEIVE_GROUP} from '../actions/group_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const GroupsReducer = (oldState={},action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      return merge({}, oldState, { [action.group.id]: action.group });
    default:
      return oldState;
  }
};

export default GroupsReducer;
