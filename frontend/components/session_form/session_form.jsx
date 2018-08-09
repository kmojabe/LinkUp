import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: "", password: "",email:"",location:""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount(){
    this.props.resetErrors();
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
      <div className="chunk">
      <label>Location</label>
        <input
          onChange={this.update('location')}
          value={this.state.location}
          type="text"/>
      </div>
    );
    const name = (
      <div className="chunk">
        <label>Your name</label>
        <input
          onChange={this.update('username')}
          value={this.state.username}
          type="text"/>
      </div>
    );
    const existing_user = (
      <div className="existing_user">
        Already a member? <Link to='/login'>Log in.</Link>
      </div>
    );
    const not_registered = (
      <div className="not_registered">
        Not registered with us yet? <Link to='signup'>Sign up</Link>
      </div>
    );
    const lock = (
      <i class="fas fa-lock"></i>
    );
    const doc_bound = (
      <div className="docBounds"></div>
    );
    const input_button = (
      <input type="submit" value={this.props.formType}/>
    );
    const signup_button = (
      <input type="submit" value="Continue"/>
    );

    const renderErrors = (
      <div className="error-bounds">
        <div className="error-box">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    return (
      <div className={this.props.formType === "Sign up" ? "outside-signup" : "outside-login"}>
        {this.props.formType === "Log in" ? doc_bound : null}
        {this.props.errors.length > 0 ? renderErrors : null}
      <div className={this.props.formType === "Sign up" ? "signup-form" : "login-form"}>
        <form onSubmit={this.handleSubmit}>
          <div className="head-label">
            <h2 >{this.props.formType === "Sign up" ? "Sign up" : "Log in"}
              {this.props.formType === "Log in" ? lock : null}</h2>
            {this.props.formType === "Log in" ? not_registered : null}
            {this.props.formType === "Sign up" ? name : null}
          </div>
          <div className="content-input">
            <div className="field-inputs">
              <div className="chunk">
                <label>Email address</label>
                <input
                  onChange={this.update('email')}
                  value={this.state.email}
                  type="text"/>
              </div>
              <div className="chunk">
                <label>Password</label>
                <input
                  onChange={this.update('password')}
                  value={this.state.password}
                  type="password"/>
              </div>
            </div>
            {this.props.formType === "Sign up" ? location : null}
            <div className="submit-form" >
              {this.props.formType === "Sign up" ? signup_button : input_button}
            </div>
          </div>
        </form>
        {this.props.formType === "Sign up" ? existing_user : null}
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
