import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
  render(){
    const foot = (
      <div className="footer">
        <div className="start-group">
          <Link to="groups/new">Start a new Group</Link>
          {this.props.currentUser ? <button onClick={this.props.logout}>Log out</button> : <Link to="/login">Log in</Link>}
        </div>
        <div className="bottom-foot">
          <p>Kavian Mojabe • © Linkup 2018 • all rights reserved</p>
        </div>
      </div>
    );
    return foot;
  }
}

export default Footer;
