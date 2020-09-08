import emailjs from "emailjs-com";
import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Form, Modal
} from "react-bootstrap";
import './ZoomInAd.css';


class ZoomInAd extends Component {
  constructor(props,) {
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
    this.handleITitleChange = this.handleITitleChange.bind(this);
  }

  handleModalClose = () => {
    this.setState({
      showEmailModal: false,
    });
  };

  handleModalCloseAndClean = () => {
    this.setState({
      showButton: true,
      showEmailModal: false,
      emailInput: "",
      taitalInput: "",
    });
  };
  
  handleemailInput = (event) => {
    this.setState({
      emailInput: event.target.value,
    });
    //console.log('handleemailInput', event.target.value);
  };

  handleITitleChange = (event) => {
    this.setState({
      taitalInput: event.target.value,
    });
    //console.log('handleITitleChange', event.target.value);
  };

  handleSendEmail = (event) => {
    event.preventDefault();
    const { activeUser, ad, allUsers } = this.props;
    const { emailInput, taitalInput } = this.state;
    const owner = this.props.allUsers.filter(
      (user) => this.props.ad.userId === user.id
    );

    console.log("activeUser", activeUser);

    //  Send An Email

    const template_params = {
      activ_user_fname: activeUser.fname,
      activeuser_lname: activeUser.lname,
      owner_fname: <div>{owner.length > 0 ? owner[0].fname : "N/A"}</div>,
      owner_lname: <div>{owner.length > 0 ? owner[0].lname : "N/A"}</div>,
      activeUser_fname: activeUser.fname,
      activeUser_lname: activeUser.lname,
      category_name: ad.categoryName,
      taitalinput: taitalInput,
      emailinput: emailInput,
      to_email: <div>{owner.length > 0 ? owner[0].email : "N/A"}</div>,
    };

    const service_id = "default_service";
    const template_id = "new_ad";
    emailjs
      .send(service_id, template_id, template_params)
      // .then(alert("Email Has Been Sent Succesfully To The User"))
      // .catch("The Email send Has Been failed");

    //toast
    this.setState({
      showButton: false,
    });

    this.handleModalCloseAndClean();
  };

  render() {

    // const maps = {ad.City}, {ad.StreetNumber};
    const { activeUser, ad, ads, handleLogout, allUsers } = this.props;

    const { showEmailModal } = this.state;


    /*
    THIS IS THE OLD CODE THAT RETURN AN ARRAY AND NOT AN OBJECT
    WE WOULD LIKE TO GET ONLY THE AD-USER WHICH IS AN OBJECT
    AND THEREFORE, WE USED ower[0].fname AT THE BOTTOM.

    THE FOLLOWING CODE SOMPLY REPLACE 'filter' WITH 'find' 
    WHICH RETURNS AN OBJECT INSTEAD OF ARRAY SO WE CAN DO
    owner.fname

    */
    console.log("activeUser", activeUser);
    const owner = this.props.allUsers.find(
      (user) => this.props.ad.userId === user.id
    );
    console.log("owner", owner);

    const sendAnEmail = activeUser && (

      <Button
        onSubmit={this.handleSendEmail}
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
        <Container 
        className="d-flex "
        >
          <Card
            className="mx-auto shadow p-3 mt-5 rounded text-muted card "
          >
            <Card.Title className="m-2 card text-center">{ad.subCategoryName}</Card.Title>

            <Card.Body className="   ">
              <div>Details: {ad.Details}</div>
              <div>Condition: {ad.Condition}</div>
              <div>
                Owner Name: {owner ? owner.fname + " " + owner.lname : "N/A"}
              </div>
              <div>
                That lives In:{" "}
                {owner
                  ? owner.livingArea + "  " + "Area,  " + " " + " " + owner.City
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
                variant="link"
                type="submit"
              >
                Send An Email
              </Button>
            ) : (
              <></>
            )}

            <small className=" m-2 text-muted card text-center">Published Date {ad.Date}</small>
          </Card>
        </Container>

        <Modal show={showEmailModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title className="titel">
              Send An Email To :
              <div> {owner ? owner.fname + " " + owner.lname : "N/A"}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pic">
            <Form.Group 
            className="titeltext"
            controlId="title">
              <Form.Control
                onChange={this.handleITitleChange}
                type="text"
                name="titleInput"
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group 
            className="textarea"
            controlId="emailInput">
              <Form.Control
                as="textarea"
                rows="5"
                onChange={this.handleemailInput}
                type="text"
                name="emailInput"
                placeholder="Ask A Question...."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="mfooter">
            <Button variant="link" onClick={this.handleModalCloseAndClean}>
              Close
            </Button>
            <Button
              variant="link"
              onSubmit={this.handleSendEmail}
              onClick={this.handleModalCloseAndClean}
            >
              Sand An Email
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ZoomInAd;
