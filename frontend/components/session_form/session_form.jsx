import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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
  render(props){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input
            onChange={this.update('username')}
            value={this.state.username}
            type="text"/>
        </label>
        <label>Password
          <input
            onChange={this.update('password')}
            value={this.state.password}
            type="password"/>
          </label>
        <input type="submit" value={this.props.formType}/>
      </form>
    );
  }
}

export default withRouter(SessionForm);
