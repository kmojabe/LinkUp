import React from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../reducer/selectors';

class Show extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetch(this.props.objectId);
  }

  componentWillReceiveProps(newProps){
    let newid = newProps.match.params.groupId || newProps.match.params.userId;
    if (newid != this.props.objectId) {
      this.props.fetch(newid);
    }
  }

  componentWillUnmount(){
    this.props.resetErrors();
  }

  handleClick(){

    let followers = {};
    if (this.props.typeObject == "group"){
      followers = this.props.object.members;
    } else if (this.props.typeObject == "user") {
      name = this.props.object.username;
    }
    if (followers[this.props.currentUser.id]){
      console.log("HERE");
      this.props.unfollow(this.props.objectId);
    } else {
      let groupMember = {group_id: this.props.objectId, user_id: this.props.currentUser.id};
      this.props.follow(groupMember);
    }
  }

  render(){
    if (!this.props.object){
      return null;
    }

    const date = this.props.object.created_at.split("T")[0];
    let name = "";
    let keys = [];
    let followers = {};
    if (this.props.typeObject == "group"){
      name = this.props.object.group_name;
      if (this.props.object.members){
        keys = Object.keys(this.props.object.members);
      }
      followers = this.props.object.members;
    } else if (this.props.typeObject == "user") {
      name = this.props.object.username;
    }

    const bio = (
      <div className={`showme-info ${this.props.typeObject}-showme`}>
        {this.props.typeObject == "group" ? <h4>What we're about</h4> : <h4>Bio</h4>}
        <p>{this.props.object.bio}</p>
      </div>
    );

    const information = (
      <div className={`show-information ${this.props.typeObject}-info`}>
        <div className="show-name">
          <h3>{name}</h3>
        </div>
        <div className="general-info">
          <div className="showme-info">
            <h4>Location:</h4>
            <p className="location">{this.props.object.location}</p>
          </div>
          <div className="showme-info">
            <h4>Linkup since:</h4>
            <p className="created-at">{date}</p>
          </div>
        </div>
        {this.props.typeObject == "user" ? bio : null}
        {this.props.currentUser && this.props.typeObject == "group" ? <button onClick={this.handleClick}>{ followers[this.props.currentUser.id] ? "Unfollow" : "Follow"}</button> : null }
      </div>
    );

    const image = (
      <div className={`show-image ${this.props.typeObject}-img`}>
        {this.props.object.img_url == null ? <i class="fas fa-user"></i> : <img src={this.props.object.img_url}/>}
      </div>
    );

    const member_list = (
      <ul className="list-followers">
        {keys.map(key => {
          return (
            <li>
              <Link to={`/users/${key}`}>
                <div className="img-bounds">
                  <img src={followers[key].img_url}/>
                </div>
                <p>{followers[key].username}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
    const object_follows = (
      <div className="follows">
        <h4>{this.props.typeObject == "user" ? "Groups I follow" : "Members"}</h4>
        {keys.length > 0 ? member_list : <p>This Group has no members</p>}
      </div>
    );

    return (
      <div className="show-page">
        <div className="show-inside">
          <div className="show-header">
            {information}
            {image}
          </div>
          {this.props.typeObject == "group" ? bio : null}
          {this.props.typeObject == "group" ? object_follows : null}
        </div>
      </div>
    );
  }
}

export default Show;
