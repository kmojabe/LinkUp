import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => (
  <div className="application">
    <h1>Linkup</h1>
    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <GreetingContainer/>
    </Switch>
  </div>
);

export default App;
