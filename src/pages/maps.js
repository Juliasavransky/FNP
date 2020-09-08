import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Maps extends Component {
  render() {

      const {address} = this.props.matсh.params;

    return (
      <div>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          src={
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyBGwuk78nvE8sbBxd8xt-tPL1mT1DiwZCY&q=" +
            address 
    
            
          }
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}


export default withRouter(Maps);
