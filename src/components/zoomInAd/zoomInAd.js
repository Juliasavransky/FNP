import React, { Component } from 'react';
import { Card, Container, Button, Modal, } from 'react-bootstrap';
import AdCard from '../AdCard/AdCard';
import emailjs from 'emailjs-com';
import MailToTheOwner from '../MailToTheOwner/MailToTheOwner'

class ZoomInAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showEmailModal: false
    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  

  handleModalClose = () => {
    this.setState({
      showEmailModal: false,
    });
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
    const {activeUser,ad,ads,handleLogout,allUsers, handleSendEmail, } = this.props;

    const{showEmailModal}=this.state;
    
console.log("activeUser",activeUser)
    const owner = this.props.allUsers.filter(
      user => this.props.ad.userId === user.id
    );

    const sendAnEmail = activeUser && (
      <Button
        onSubmit={() => handleSendEmail()}
        href="#/emailSending"
        variant="secondary">
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
      <>
      <Container className="d-flex ">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2 text-muted card "
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.subCategoryName}</Card.Title>

          <Card.Body className="m-4 card  ">
            <div>Details: {ad.Details}</div>
            <div>Condition: {ad.Condition}</div>
            <div>Owner name:{' '}
              {owner.length > 0 ? owner[0].fname + ' ' + owner[0].lname : 'N/A'}</div>
            <div>That live in:{' '}
              {owner.length > 0 ? owner[0].livingArea + "  " + 'Area  ' + "in" + " " + owner[0].City : 'N/A'}</div>


          </Card.Body>
          <Card.Img variant="bottom" src={ad.img} />
          {signupUser}
          {LogInUser}

          <Button
            onSubmit={this.handleSendEmail}
            onClick={() => this.setState({showEmailModal: true})}
            className="btn-login"
            variant="primary"
            type="submit">
            Send An Email
          </Button>

          <small className=" m-2 text-muted">Published Date {ad.Date}</small>
        </Card>
        </Container>  


        <Modal show={showEmailModal} onHide={this.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
         
    );
  }
}

export default ZoomInAd;
