import React, { Component } from 'react';
import './footer.css';

// class MenuItem extends Component {
//   render() {
//     return (
//       <a href="./#emptypage" className="active">
//         {this.props.title} |{' '}
//       </a>
//     );
//   }
// }

class Footer extends Component {
  render() {
    return (
      <div className="footer position-fixed fixed-bottom">
        {/* <MenuItem title="Contact Us" />
        <MenuItem title="Publish In Our Site" />
        <MenuItem title="Site's Policy" />
        <MenuItem title="Code of Ethics" />
        <MenuItem title="" /> */}

        <a href=".#/emptypage" className="active">
          Contact Us |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Publish In Our Site |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Site's Policy |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Code of Ethics |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Project Assistance |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Privacy Policy |{' '}
        </a>
        <a href=".#/emptypage" className="active">
          Help
        </a>
        <br />
        <a href=".#/emptypage" className="active">
          Second-Hand Board For Mother And Baby Products For Free Delivery Only
        </a>
      </div>
    );
  }
}

export default Footer;
