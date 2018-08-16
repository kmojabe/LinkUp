import {RECEIVE_EVENT, REPLACE_EVENT} from '../actions/event_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const EventsReducer = (oldState={},action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({},oldState, {[action.event.id]: action.event});
    case REPLACE_EVENT:
      const newState = merge({},oldState);
      console.log(action);
      delete newState[action.event.id];
      return merge({},newState, {[action.event.id]: action.event});
    default:
      return oldState;
  }
};

export default EventsReducer;
