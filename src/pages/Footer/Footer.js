import React, { Component, Navbar } from 'react';
import './footer.css';


class footer extends Component {
  render() {
    return (
      <div className="footer position-fixed fixed-bottom">
        <a href="./#emptypage" className="active">
          {' '}
          Contact Us|
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Publish In Our Site|
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Site's Policy |{' '}
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Code of Ethics |{' '}
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Project Assistance|
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Privacy Policy|
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Help|
        </a>
        <a href="./#emptypage" className="active">
          {' '}
          Second-Hand Board For Mother And Baby Products For Free Delivery Only|{' '}
        </a>
      </div>
    );
  }
}

export default footer;
