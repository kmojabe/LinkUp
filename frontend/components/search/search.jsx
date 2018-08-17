import React from 'react';
import { Link } from 'react-router-dom';
import { asArray } from '../../reducer/selectors';
import GroupIndex from '../group/group_index';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    this.props.fetchGroups(this.state);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillUnmount(){
    this.props.clearGroups();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchGroups(this.state);
  }

  render() {
    const form_container = (
      <form onSubmit={this.handleSubmit} className="search-form">
        <div className="btn-wrapper">
          <input
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
            className="search-input"
            placeholder="All Linkups"/>
          <button type="submit" class="btn btn-success">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <select onChange={this.update("location")} className="btn-mine">
          <option default value="">Pick a Location</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Dallas, TX">Dallas, TX</option>
          <option value="West Lafayette, IN">West Lafayette, IN</option>
          <option value="Chicago, IL">Chicago, IL</option>
        </select>
        <ul className="group-calendar">
          <li className="hover-on"><Link to="/search">Groups</Link></li>
          <li><Link to="/">Calendar</Link></li>
        </ul>
      </form>
    );
    const home_box = (

      <div className="google-me">
        <div className="home">
          <div className="home-box">
            <h2 className="mainHeader">Find a Linkup</h2>
            <p className="mainP">1,770 Linkup near by</p>
          </div>
        </div>
        <div className="testing-home">
        <div className="find-navbar-wrap">
          {form_container}
        </div>
        </div>
        {<GroupIndex groups={this.props.groups}/>}
      </div>
    );


    return home_box;
  }
}

export default Search;
