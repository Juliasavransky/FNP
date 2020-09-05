import emailjs from "emailjs-com";
import React, { Component } from "react";
import { Button, Card, Container, Modal, Form, Row, Col } from "react-bootstrap";

class ZoomInAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showEmailModal: false,
      emailInput: "",
      taitalInput: "",

    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleemailInput = this.handleemailInput.bind(this);
    this.handleITaitelChange = this.handleITaitelChange.bind(this);
  }

  handleModalClose = () => {
    this.setState({
      showEmailModal: false,
    });
  }
  handleModalCloseAndClean = () => {
    this.setState({
      showButton: true,
      showEmailModal: false,
      emailInput: "",
      taitalInput: "",
    });
  }
  handleemailInput = (event) => {
    this.setState({
      emailInput: event.target.value
    })
    console.log("handleemailInput", event.target.value)
  }

  handleITaitelChange = (event) => {
    this.setState({
      taitalInput: event.target.value
    })
    console.log("handleITaitelChange", event.target.value)
  }

  handleSendEmail = (event) => {
    event.preventDefault();
    const { activeUser, ad, allUsers } = this.props;
    const { emailInput, taitalInput } = this.state;
    const owner = this.props.allUsers.filter(
      user => this.props.ad.userId === user.id
    );

    console.log('activeUser', activeUser);

    //  Send An Email

    const template_params = {

      activ_user_fname: activeUser.fname,
      activeuser_lname: activeUser.lname,
      owner_fname: <div>{owner.length > 0 ? owner[0].fname : 'N/A'}</div>,
      owner_lname: <div>{owner.length > 0 ? owner[0].lname : 'N/A'}</div>,
      activeUser_fname: activeUser.fname,
      activeUser_lname: activeUser.lname,
      category_name: ad.categoryName,
      taitalinput: taitalInput,
      emailinput: emailInput,
      to_email: <div>{owner.length > 0 ? owner[0].email : 'N/A'}</div>,

    };

    const service_id = "default_service";
    const template_id = "new_ad";
    emailjs
      .send(service_id, template_id, template_params)
      .then(alert("Email Has Been Sent Succesfully To The User"))
      .catch("The Email send Has Been failed");


    this.setState({
      showButton: false,
    });

    this.handleModalCloseAndClean()

  };

  render() {
    const { activeUser, ad, ads, handleLogout, allUsers, handleSendEmail, } = this.props;

    const { showEmailModal } = this.state;

    console.log("activeUser", activeUser)
    const owner = this.props.allUsers.filter(
      (user) => this.props.ad.userId === user.id
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
      <>
        <Container className="d-flex ">
          <Card
            className="mx-auto shadow p-3 mt-5 rounded text-muted card "
            style={{ width: '26rem' }}
          >
            <Card.Title className=" m-2">{ad.subCategoryName}</Card.Title>

            <Card.Body className="   ">
              <div>Details: {ad.Details}</div>
              <div>Condition: {ad.Condition}</div>
              <div>
                Owner name:{" "}
                {owner.length > 0
                  ? owner[0].fname + " " + owner[0].lname
                  : "N/A"}
              </div>
              <div>
                That live in:{" "}
                {owner.length > 0
                  ? owner[0].livingArea +
                  "  " +
                  "Area  " +
                  "in" +
                  " " +
                  owner[0].City
                  : "N/A"}
              </div>
            </Card.Body>
            <Card.Img variant="bottom" src={ad.img} />
                {signupUser}
                {LogInUser}
            {activeUser ? (
              <Button
                onSubmit={this.handleSendEmail}
                onClick={() => this.setState({ showEmailModal: true })}
                className="btn-login"
                variant="primary"
                type="submit"
              >
                Send An Email
              </Button>
            ) : (
                <></>
              )}

            <small className=" m-2 text-muted">Published Date {ad.Date}</small>
          </Card>
        </Container>


        <Modal show={showEmailModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send an email to :
          <div>{' '}
                {owner.length > 0 ? owner[0].fname + ' ' + owner[0].lname : 'N/A'}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form.Group
              controlId="taitel">
              <Form.Control
                style={{ width: '27rem' }}
                onChange={this.handleITaitelChange}
                type="text" name="taitelInput" placeholder="Taitel" />
            </Form.Group>

            <Form.Group
              controlId="emailInput">
              <Form.Control
                as="textarea"
                style={{ width: '27rem' }}
                rows="5"
                onChange={this.handleemailInput}
                type="text" name="emailInput" placeholder="Ask a question...." />
            </Form.Group>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalCloseAndClean}>
              Close
          </Button>
            <Button variant="primary" onSubmit={this.handleSendEmail}
              onClick={this.handleModalCloseAndClean}>
              Sand an Email
          </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default ZoomInAd;
