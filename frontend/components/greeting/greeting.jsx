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
            {this.props.currentUser ? <li><Link to={`/users/${this.props.currentUser.id}`}>
              <p>Profile</p>
            </Link></li> : null}
            <li><p>Settings</p></li>
            <li onClick={this.props.logout}><p>Sign out</p></li>
          </ul>
        </div>
      </div>
  );

    const logged_in = () => (
      <nav className="logged_in">
        <div className="create-group-form">
          <Link to="/groups/new">Start a new group</Link>
        </div>
        <Link className="explore" to="/search">Explore</Link>
        <a>Messages</a>
        <a>Notifications</a>
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

        <div className="linkedin">
          <a href="https://www.linkedin.com/in/kavianmojabe/"><i class="fab fa-linkedin"></i></a>
        </div>
        <div className="github">
          <a href="https://github.com/kmojabe/"><i class="fab fa-github-square"></i></a>
        </div>
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
