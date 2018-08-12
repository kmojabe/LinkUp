import { RECEIVE_SESSION_ERRORS , RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS} from '../actions/session_actions';
// import merge from 'lodash/merge';

const SessionErrorsReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};


export default SessionErrorsReducer;
