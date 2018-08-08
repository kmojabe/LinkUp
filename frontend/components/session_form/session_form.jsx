import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: "",email:"",location:""};
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
    const location = (
      <label>Location
        <input
          onChange={this.update('location')}
          value={this.state.location}
          type="text"/>
      </label>
    );
    const name = (
      <label>Your Name
        <input
          onChange={this.update('username')}
          value={this.state.username}
          type="text"/>
      </label>
    );
    const existing_user = (
      <div>
        Already a member? <Link to='/login'>Log in.</Link>
      </div>
    );
    const not_registered = (
      <div>
        Not registered with us yet? <Link to='signup'>Sign up</Link>
      </div>
    );
    return (
      <div className="log-in-form">
        <form onSubmit={this.handleSubmit}>
          {this.props.formType === "Sign Up" ? name : null}
          <label>Email
            <input
              onChange={this.update('email')}
              value={this.state.email}
              type="text"/>
          </label>
          <label>Password
            <input
              onChange={this.update('password')}
              value={this.state.password}
              type="password"/>
            </label>
          {this.props.formType === "Sign Up" ? location : null}
          <input type="submit" value={this.props.formType}/>
        </form>
        {this.props.formType === "Sign Up" ? existing_user : not_registered}
      </div>
    );
  }
}

export default withRouter(SessionForm);
