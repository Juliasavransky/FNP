import React, { Component } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import AdCard from '../AdCard/AdCard';
import emailjs from 'emailjs-com';

class ZoomInAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: true,
    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
  }

  handleSendEmail = event => {
    event.preventDefault();
    const { activeUser } = this.props;
    console.log('activeUser', activeUser);

    // //  Send An Email

    const template_params = {
      to_email: this.props.activeUser.email,
      ad_name: 'ad_name_value',
      fname: 'fname_value',
      lname: 'lname_value',
      ad_desc: 'ad_desc_value',
    };

    const service_id = 'default_service';
    const template_id = 'new_ad';
    emailjs
      .send(service_id, template_id, template_params)
      .then(alert('Email Has Been Sent Succesfully To The User'))
      .catch('The Email send Has Been failed');

    this.setState({
      showButton: false,
    });
  };

  render() {
    const {
      activeUser,
      ad,
      ads,
      handleLogout,
      allUsers,
      handleSendEmail,
    } = this.props;
    console.log('allUsers Name', ad.userId);
    console.log('allUsers', allUsers);

    const owner = this.props.allUsers.filter(
      user => this.props.ad.userId === user.id
    );

    const sendAnEmail = activeUser && (
      <Button
        onSubmit={() => handleSendEmail()}
        href="#/emailSending"
        variant="secondary"
      >
        Send An Email
      </Button>
    );

    const signupUser = !activeUser && (
      <Button
        href="#/signup"
        variant="secondary"
        className="btn-userLogin mr-2 mb-3"
      >
        Sign Up
      </Button>
    );

    const LogInUser = !activeUser ? (
      <Button
        href="#/login"
        variant="secondary"
        className="btn-userLogin mr-2 mb-3 "
      >
        Log In
      </Button>
    ) : null;

    return (
      <Container className="d-flex ">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2 text-muted card text-center"
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.subCategoryName}</Card.Title>

          <Card.Body className="m-4 text-muted card  ">
           <div>Details: {ad.Details}</div> 
           <div>Condition: {ad.Condition}</div> 
            Owner name:{' '}
            {owner.length > 0 ? owner[0].fname + ' ' + owner[0].lname : 'N/A'}
            Owner name:{' '}
            {owner.length > 0 ? owner[0].livingArea + ' ' + "in"+ owner[0].City : 'N/A'}
        

          </Card.Body>

          {/* <Card.Text className="m-2 text-muted card text-center">
            Condition: {ad.Condition}{' '}
          </Card.Text> */}

          {/* <Card.Text className="m-2 text-muted card text-center">
            Owner name:{' '}
            {owner.length > 0 ? owner[0].fname + ' ' + owner[0].lname : 'N/A'}
          </Card.Text> */}

          <Card.Img variant="bottom" src={ad.img} />
          {signupUser}
          {LogInUser}
          
          <Button
            onSubmit={this.handleSendEmail}
            className="btn-login"
            variant="primary"
            type="submit"
          >
            Send An Email
          </Button>
          <small className=" m-2 text-muted">Published Date {ad.Date}</small>
        </Card>
      </Container>
    );
  }
}

export default ZoomInAd;
