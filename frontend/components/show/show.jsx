import React from 'react';
import { Link } from 'react-router-dom';
import { selectUser } from '../../reducer/selectors';

class Show extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount(){
    if (!this.props.object){
      this.props.object = this.props.fetch(this.props.objectId);
    }

  }

  componentWillUnmount(){
    this.props.resetErrors();
  }

  render(){
    if (!this.props.object){
      return null;
    }

    const date = this.props.object.created_at.split("T")[0];
    let name = "";
    if (this.props.typeObject == "group"){
      name = this.props.object.group_name;
    }

    const information = (
      <div className="show-information">
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
      </div>
    );


    const bio = (
      <div className="showme-info">
        <h4>What we're about</h4>
        <p>{this.props.object.bio}</p>
      </div>
    );

    const image = (
      <div className="show-image">
        {this.props.object.img_url == null ? <i class="fas fa-user"></i> : <img src={this.props.object.img_url}/>}
      </div>
    );

    return (
      <div className="show-page">
        <div className="show-inside">
          <div className="show-header">
            {information}
            {image}
          </div>
          {bio}
        </div>
      </div>
    );
  }
}

export default Show;
