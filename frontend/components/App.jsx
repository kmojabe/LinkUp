import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainContainer from './main/main_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="application">
    <header>
      <h1>Linkup</h1>
      <GreetingContainer/>
    </header>
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
