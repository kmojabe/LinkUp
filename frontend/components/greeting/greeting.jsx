import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const logged_in = () => (
    <nav className="logged_in">
      <h3>Hello {props.currentUser.username}</h3>
      <div className="dropdown">
        <a className="profile-dropdown"><i class="fas fa-user-alt"></i></a>
        <div id="droptop" className="header-dropdown" >
          <ul className="group-list">
            <li><p>Uber San Francisco</p></li>
          </ul>
          <ul className="profile-list">
            <li><p>Profile</p></li>
            <li><p>Settings</p></li>
            <li onClick={props.logout}><p>Sign out</p></li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // function dropTop() {
  //   var x = document.getElementById("droptop");
  //   if (x.className.indexOf("w3-show") == -1) {
  //       x.className += " w3-show";
  //   } else {
  //       x.className = x.className.replace(" w3-show", "");
  //   }
  // }

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
