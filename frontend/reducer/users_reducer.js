import {RECEIVE_CURRENT_USER, RECEIVE_USER} from '../actions/session_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const UsersReducer = (oldState={},action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({},oldState, {[action.user.id]: action.user});
    default:
      return oldState;
  }
};

export default UsersReducer;
