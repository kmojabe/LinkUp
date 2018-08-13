import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: "",
      group_name: "",
      bio: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount(){
    this.props.resetGroupErrors();
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then(
      action => this.props.history.push(`/groups/${action.group.id}`));
  }
  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const g_form = (
      <div className="group-form">
        <form onSubmit={this.handleSubmit}>
          <div className="group-fillin">
            <i class="fas fa-globe-americas"></i>
            <div className="info">
              <div>STEP 1 OF 4</div>
              <h5>What's your new Linkup Group's hometown?</h5>
              <input
                onChange={this.update('location')}
                placeholder="example: San Francisco, CA"
                value={this.state.location}
                type="text"></input>
            </div>
          </div>
          <div className="group-fillin">
            <i class="fas fa-file-signature"></i>
            <div className="info">
              <div>STEP 2 OF 4</div>
              <h5>What will your Linkup's name be?</h5>
              <input
                onChange={this.update('group_name')}
                placeholder="example: New York Hikers Anonymous"
                value={this.state.group_name}
                type="text"/>
            </div>
          </div>
          <div className="group-fillin">
            <i class="fas fa-users"></i>
            <div className="info">
              <div>STEP 3 OF 4</div>
              <h5>Describe who should join, and what your Linkup will do.</h5>
              <textarea
                onChange={this.update('bio')}
                placeholder="example: This is a group for anyone interested in hiking, rock climbing, camping, kayaking, bouldering, etc. All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody."
                value={this.state.bio}/>
            </div>
          </div>
          <div className="group-fillin">
            <i class="fas fa-award"></i>
            <div className="info">
              <div>STEP 4 OF 4</div>
              <h5>What it means to be a Linkup.</h5>
              <ul>
                <li>Real, in-person conversations</li>
                <li>Safe and Responsible</li>
                <li>Put your members first</li>
                <li>Ambitious to take over the world</li>
              </ul>
              <div className="submit-button">
                <input type="submit" value="Agree & Continue"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );

    const login_first = (
      <div className="group-form-login">
        <h3>To create a group you must be logged.</h3>
        <Link to="/login">Log in</Link>
      </div>
    );

    return (
      <div className="group">
        <div className="group-image">
          <img src={window.media.cloud}/>
          <div className="image-text">
            <h5>Start a new Linkup</h5>
            <p>We'll help you find the right people to make it happen.</p>
          </div>
        </div>
        {this.props.currentUser ? g_form : login_first}
      </div>
    );
  }

}

export default withRouter(GroupForm);
