import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndex from '../group/group_index';

class Main extends React.Component {
  componentDidMount(){
    this.props.fetchGroups({all: true});
  }

  render(){
    const logged_in = () => (
      <div className="home">
        <div className="home-box">
          <h2 className="mainHeader">Find a Linkup</h2>
          <p className="mainP">1,770 Linkup near by</p>
        </div>
      </div>
    );

    const logged_out = () => (
      <main>
        <div className="join-linkup">
          <video autoPlay loop className="linkup-video">
            <source src={window.media.funFair}/>
          </video>
          <div className="video-overlay">
            <h2>What do you love?</h2>
            <h4>Do more of it with Linkup</h4>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        {explore()}
        <div className="header-border">
          <h2 className="pop-link">Explore Popular Linkups</h2>
        </div>
        {<GroupIndex groups={this.props.groups}/>}
      </main>
    );

    const explore = () => (
      <div className="explore-linkup">
        <ul>
          <li><a type="button">Join a movement</a></li>
          <li><a type="button">Learn to cook</a></li>
          <li><a type="button">Train for a marathon</a></li>
          <li><a type="button">Build a mobile app</a></li>
          <li><a type="button">Hike a Mountain</a></li>
          <li><a type="button">Practice a Language</a></li>
        </ul>
      </div>
    );

    return this.props.currentUser ? logged_in() :  logged_out();
  }
}

export default Main;
