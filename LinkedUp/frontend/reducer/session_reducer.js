import {LOGOUT_CURRENT_USER,RECEIVE_CURRENT_USER} from '../action/session_action';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  id: null
});

const SessionReducer = (oldState=_defaultState,action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      // const newState = merge({},oldState);
      return merge({},oldState,_defaultState);
    case RECEIVE_CURRENT_USER:
      return merge({},oldState,{id: action.currentUser.id});
    default:
      return oldState;
  }
};

export default SessionReducer;
