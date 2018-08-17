import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class EventIndex extends React.Component{

  getDate(date){
    let dates = date.split("-");
    let year = dates[0];
    let day = dates[2];
    let month = "";
    switch (dates[1]) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "Septemper";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }
    return month + " " + day + ", " + year;
  }
  render(){
    let events = Object.keys(this.props.events).map(event_key => {
      let eventObj = this.props.events[event_key];
      eventObj.id = event_key;
      return eventObj;
    });

    const all_events = (
      <div className="event-list menu-wrapper">
        <h3>Upcoming Events</h3>
        <ul className="list-events menu">
          {events.map(event => {
            return (<li class="item">
                  <Link to={`/events/${event.id}`}>
                    <div className="img-bounds">
                      <img src={event.img_url ? event.img_url : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"}/>
                      <div className="month-graphic">
                        <h5>{this.getDate(event.event_date).split(" ")[0].split("").slice(0,3).join("")}</h5>
                        {this.getDate(event.event_date).split(" ")[1].split(",")[0]}
                      </div>
                    </div>
                    <div className="event-info">
                      <span>{this.getDate(event.event_date)}</span>
                      <p>{event.event_name}</p>
                    </div>
                  </Link>
              </li>);
          })}
        </ul>
        <div class="paddles">
          <button class="left-paddle paddle hidden">
            <i class="fas fa-chevron-circle-left"></i>
          </button>
          <button class="right-paddle paddle">
            <i class="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>
    );
    return all_events;
  }
}

export default EventIndex;
