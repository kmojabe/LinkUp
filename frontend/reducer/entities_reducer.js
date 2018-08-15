import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import GroupsReducer from './groups_reducer';
import EventsReducer from './events_reducer';
import EventAttendeesReducer from './event_attendees_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  groups: GroupsReducer,
  events: EventsReducer,
  eventAttendees: EventAttendeesReducer
});

export default EntitiesReducer;
