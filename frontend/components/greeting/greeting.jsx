import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  render() {
    const dropdown = (
      <div>
        <div className="rest-page" onClick={() => this.setState({toggle: !this.state.toggle})}></div>
        <div id="droptop" className="header-dropdown" >
          <ul className="group-list">
            <li><p>Uber San Francisco</p></li>
          </ul>
          <ul className="profile-list">
            <li><p>Profile</p></li>
            <li><p>Settings</p></li>
            <li onClick={this.props.logout}><p>Sign out</p></li>
          </ul>
        </div>
      </div>
  );

    const logged_in = () => (
      <nav className="logged_in">
        <h3>Hello {this.props.currentUser.username}</h3>
        <div className="dropdown">
          <a className="profile-dropdown"
            onClick={() => this.setState({toggle: !this.state.toggle})}>
              <i class="fas fa-user-alt"></i>
          </a>
          {this.state.toggle ? dropdown : null}
        </div>
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
    return this.props.currentUser ? logged_in() : logged_out();
  }
}

export default Greeting;
