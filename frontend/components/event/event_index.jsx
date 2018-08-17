import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class EventIndex extends React.Component{


  render(){
    let events = Object.keys(this.props.events).map(event_key => {
      let eventObj = this.props.events[event_key];
      eventObj.id = event_key;
      return eventObj;
    });
    const all_events = (
      <div className="index-events index-groups">
        <ul className="list-events list-groups">
          {events.map(event => {
            return (<li>
                  <Link to={`/events/${event.id}`}>
                    <div className="img-bounds">
                      <img src={event.img_url ? event.img_url : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"}/>
                      <p>{event.event_name}</p>
                    </div>
                  </Link>
              </li>);
          })}
        </ul>
      </div>
    );
    return all_events;
  }
}

export default EventIndex;
