import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
  const logged_in = () => (
    <div className="home">
      <h2 className="mainHeader">Find a Meetup</h2>
      <p className="mainP">1,770 Meetups near by</p>
    </div>
  );

  const logged_out = () => (
    <div className="join-linkup">
      <video autoPlay loop >
        <source src={window.media.funFair}/>
      </video>
    </div>
  );
  return props.currentUser ? logged_in() :  logged_out();
};

export default Main;
