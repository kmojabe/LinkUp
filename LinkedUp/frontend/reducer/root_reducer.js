import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities-reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionErrorsReducer,
  errors: ErrorsReducer
});
