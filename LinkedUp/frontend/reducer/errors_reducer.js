import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';

const ErrorsReducer = combineReducers({
  errors: SessionErrorsReducer
});

export default ErrorsReducer;
