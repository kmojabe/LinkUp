import React from 'react';
import { Link } from 'react-router-dom';

class GroupIndex extends React.Component {

  render(){
    const all_groups = (
      <div className="index-groups">
        <ul className="list-groups">
          {this.props.groups.map(group => {
            return (<li>
                  <Link to={`groups/${group.id}`}>
                    <div className="img-bounds">
                      <img src={group.img_url ? group.img_url : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"}/>
                      <p>{group.group_name}</p>
                    </div>
                  </Link>
              </li>);
          })}
        </ul>
      </div>
    );
    return all_groups;
  }
}

export default GroupIndex;
