import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import RequestForItem from '../Request for item/RequestForItem';
import './Sorry.css';


//להוריד
class Sorry extends Component {
  componentDidMount() {
    console.log('Sorry', this.props);
  }
  render() {
    return (
      <div>
        <Container className="sorry">
          Sorry, the item you are interested in is not currently on the site.{' '}
          <br></br>
          The smart agent scans the site for you even when you are not on it,{' '}
          <br></br>
          and finds for you the ads you are looking for according to predefined
          criteria. <br></br>
          How is this working? <br></br> <br></br>
          First click on Add New Agent and define the criteria of the ads you
          are looking for.<br></br>
          As soon as you fill in the details, <br></br>
          the smart agent will wait for new ads to be added to the site, which
          meet the criteria you have set for him. <br></br>
          The search results can be obtained by your email. <br></br> <br></br>
          <RequestForItem
            ads={this.props.ads}
            handleLogin={this.props.handleLogin}
            allUsers={this.props.allUsers}
            handleLogout={this.props.handleLogout}
            activeUser={this.props.activeUser}
            handleCreatNewAd={this.props.handleCreatNewAd}
            handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          />
        </Container>
      </div>
    );
  }
}

export default Sorry;
