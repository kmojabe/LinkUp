import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndex from '../group/group_index';

class Main extends React.Component {
  componentDidMount(){
    this.props.fetchGroups({all: true});
  }

  render(){
    // if (this.props.currentUser){
    //   this.props.history.push("/search");
    // }
    const search_me = (
      <div className="video-overlay">
        <h2>What do you love?</h2>
        <h4>Find the right Linkup for you.</h4>
        <Link to="/search">Search Groups</Link>
      </div>
    );
    const signmeup = (
      <div className="video-overlay">
        <h2>What do you love?</h2>
        <h4>Do more of it with Linkup</h4>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
    const logged_out = () => (
      <main>
        <div className="join-linkup">
          <video autoPlay loop className="linkup-video">
            <source src={window.media.funFair}/>
          </video>
          {this.props.currentUser ? search_me : signmeup }
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

    return logged_out();
  }
}

export default Main;
