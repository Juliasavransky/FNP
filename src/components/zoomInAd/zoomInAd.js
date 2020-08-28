import React, { Component } from 'react';
import { Card, CardColumns, Col, Row, Container, Button } from 'react-bootstrap';
import AdCard from '../AdCard/AdCard';

class ZoomInAd extends Component {
  constructor(props) {
    super(props);


  }
  // this.hendelForm = this.hendelForm.bind(this);


  handleSendEmail = event => {
    event.preventDefault();
    const { activeUser } = this.props;
    console.log("activeUser", activeUser)


    // this.setState({
    // });
  };

  render() {
    const { activeUser, ad, handleLogout, allUsers, } = this.props;
    console.log("activeUser", activeUser)

    // const sendAnEmail = activeUser ? (
    //   <Button onClick={() => handleSendEmail()} href="#/emailSending" variant="secondary">
    //     Send an Email
    //   </Button>
    // ) : null;
    const signupUser = !activeUser ? (
      <Button href="#/signup" variant="secondary" className="btn-userLogin">
        Signup
      </Button>
    ) : null;
    const LogInUser = !activeUser ? (
      <Button href="#/login" variant="secondary" className="btn-userLogin">
        LogIn
      </Button>
    ) : null;

    return (
      <Container className="d-flex ">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2"
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.Category}</Card.Title>

          <Card.Text className="m-2">Details: {ad.Details}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text>Condition: {ad.Condition} </Card.Text>

          <Card.Img variant="bottom" src={ad.img} />
          <small className=" m-2 text-muted">Published Date {ad.Date}</small>
          <Button onSubmit={this.handleSendEmail} className="btn-login" variant="primary" type="submit">
          {signupUser}
          {LogInUser}
            Send a Email
            </Button>
        </Card>

      </Container>
    );
  }
}

export default ZoomInAd;
