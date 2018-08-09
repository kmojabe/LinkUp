import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const logged_in = () => (
    <nav className="logged_in">
      <h3>Hello {props.currentUser.username}</h3>
      <button onClick={props.logout}>Log Out</button>
    </nav>
  );

  const logged_out = () => (
    <nav className="logged_out">
      <div className="nav-login">
        <Link to="/login">Log In</Link>
      </div>
      <div className="nav-signup">
        <Link to="/signup">Sign Up</Link>
      </div>

    </nav>
  );

  return props.currentUser ? logged_in() : logged_out();
};

export default Greeting;
