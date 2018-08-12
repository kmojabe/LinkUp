import { RECEIVE_GROUP_ERRORS , RECEIVE_GROUP, CLEAR_GROUP_ERRORS} from '../actions/group_actions';

const GroupErrorsReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP_ERRORS:
      return action.errors;
    case CLEAR_GROUP_ERRORS:
      return [];
    case RECEIVE_GROUP:
      return [];
    default:
      return state;
  }
};


export default GroupErrorsReducer;
