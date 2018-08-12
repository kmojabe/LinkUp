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
    this.props.action(this.state);
  }
  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div className="group-form">
        <form onSubmit={this.handleSubmit}>
          <div className="group-location">
            <h5>What's your new Linkup Group's hometown?</h5>
            <input
              onChange={this.update('location')}
              value={this.state.location}
              type="text"/>
          </div>
          <div className="group-name">
            <h5>What will your Meetup's name be?</h5>
            <input
              onChange={this.update('group_name')}
              value={this.state.group_name}
              type="text"/>
          </div>
          <div className="group-bio">
            <h5>Describe who should join, and what your Meetup will do.</h5>
            <textarea
              onChange={this.update('bio')}
              value={this.state.bio}/>
          </div>
          <input type="submit" value="Agree & Continue"/>
        </form>
      </div>
    );
  }

}

export default withRouter(GroupForm);
