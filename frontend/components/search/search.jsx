import React from 'react';
import { Link } from 'react-router-dom';
import { asArray } from '../../reducer/selectors';
import GroupIndex from '../group/group_index';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search_text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.fetchGroups({description: this.state.search_text});
  }

  render() {
    const form_container = (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.search_text}
          onChange={this.update("search_text")}/>
        <input type="submit"/>
      </form>
    );
    const home_box = (
      <div className="google-me">
        <div className="home">
          <div className="home-box">
            <h2 className="mainHeader">Find a Linkup</h2>
            <p className="mainP">1,770 Linkup near by</p>
          </div>
          {form_container}
        </div>
        {<GroupIndex groups={this.props.groups}/>}
      </div>
    );


    return home_box;
  }
}

export default Search;
