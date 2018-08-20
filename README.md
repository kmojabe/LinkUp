# LinkUp
[LinkUp Live](http://link--up.herokuapp.com/#/)

LinkUp is a full-stack web application modeled and inspired by Meetup. LinkUp has a Ruby on Rails backend, PostgreSQL db, and a React.js/Flux frontend.
This project was built in a two week framework and design choices were made based on this constraint.

## Features & Implementation
### User/Group/Event Table Design:
Linkup is unique in that users can create/join groups or create/attend events. Because of time constraints Users, groups, and events were modeled and designed almost identically. A large focus of this project was to create clean and reusuable code and I wanted the majority of my work to reflect this. The User, Group, and Event tables have almost identical backend structure and utilize the same show page, CSS, and React components. Once creating the groundwork for the project, Linkup quickly bloomed into a functional website due to smart and efficient design choices.
![alt text](https://github.com/kmojabe/LinkUp/blob/master/app/assets/images/ShowPage.jpeg)

### Group Search Functionality
A major functionality of Meetup is its group search functionality. I tried to mirror this functionality by requesting groups based on certain filters I pass in the form of an AJAX request to Rais. The react state maintains certain search filters based on what the user specifies and this is passed similar to a hash to the backend where RAILS uniquely sorts the groups based on text input from the user.

Cool snippets of the Search functionality is the filter component of the frontend's state.
Unique sorting algorithms to make accurate searches based on group bio. 

## Future Improvements
### Category Tags 
Make category tags to better describe a group for better search functionality.

Another key search improvement would be the creation of a sifting alogorithm that can accurately give category tags to groups based on multiple variables. This would exponentially improve searching.

### Calendar Event feature
Events are difficult to find based on the current organization of LinkUp. Events should be accessed from the splash page and displayed in an easy to understand/user format. Meetup utilizes a calendar and should be useful for LinkUp as well.
