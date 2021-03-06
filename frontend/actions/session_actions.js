import * as APIUtil from '../util/session_api_util';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const logoutCurrentUser= () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(logoutCurrentUser())
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const resetErrors = () => dispatch => {
  dispatch(clearErrors());
};

export const fetchUser = (id) => dispatch => {
  return APIUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
