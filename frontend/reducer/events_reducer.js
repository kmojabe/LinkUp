import {RECEIVE_EVENT} from '../actions/event_actions'; //later need to add a remove user functionality
import merge from 'lodash/merge';

const EventsReducer = (oldState={},action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({},oldState, {[action.event.id]: action.event});
    default:
      return oldState;
  }
};

export default EventsReducer;
