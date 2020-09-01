import React, { Component } from 'react';
import {
  Card,
  CardColumns,
  Col,
  Row,
  Container,
  Button,
} from 'react-bootstrap';
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

    // //  send an email

       var template_params = {
        "to_email": this.props.activeUser.email,
        // "ad_name": DetailsInput,
        "fname": this.props.activeUser.fname,
        "lname": this.props.activeUser.lname,
        // "category_name":categorySelectedId,
        // "subcatgory_name":subCategorySelectedId
     }
     var service_id = "default_service";
     var template_id = "new_ad";
     emailjs.send(service_id, template_id, template_params);

    this.setState({
      showButton: false,
    });
  };

  render() {
    const {
      activeUser,
      ad,
      handleLogout,
      allUsers,
      handleSendEmail,
    } = this.props;
    console.log('activeUser', activeUser);

    const sendAnEmail = activeUser ? (
      <Button
        onSubmit={() => handleSendEmail()}
        href="#/emailSending"
        variant="secondary"
      >
        Send an Email
      </Button>
    ) : null;
        
    const signupUser = !activeUser ? (
      <Button href="#/signup" variant="secondary" className="btn-userLogin">
      
        Sign Up 
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
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2 text-muted card text-center"
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.Category}</Card.Title>

          <Card.Text className="m-2 text-muted card text-center">Details: {ad.Details}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text className="text-muted card text-center"  >Condition: {ad.Condition} </Card.Text>

          <Card.Img variant="bottom" src={ad.img} />
          {signupUser}
          {LogInUser}
          <small className=" m-2 text-muted">Published Date {ad.Date}</small>
          <Button
            onSubmit={this.handleSendEmail}
            className="btn-login"
            variant="primary"
            type="submit"
          >
            Send An Email
          </Button>
        </Card>
      </Container>
    );
  }
}

export default ZoomInAd;
