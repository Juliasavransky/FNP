import React, { Component } from 'react';
import {
  Card,
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




    const sendAnEmail = activeUser ? (
      
      <Button
        onSubmit={() => handleSendEmail()}
        href="#/emailSending"
        variant="secondary"
      >
        Send An Email
      </Button>
    ) : null;
     
    const signupUser = !activeUser ? (
      <Button href="#/signup" variant="secondary" className="btn-userLogin mr-2 mb-3">
        Sign Up 
      </Button> 
  
    ) : null;

    const LogInUser = !activeUser ? (
      <Button href="#/login" variant="secondary" className="btn-userLogin mr-2 mb-3 ">
        Log In
      </Button>
    ) : null;

    // conct advertisingUser = (ad.userId === allUsers.id)

    // const advertisingUser =  allUsers.fname.indexOf(ad.userId)
    // const advertisingUser =  allUsers.fname.find(ad.userId)

    // const advertisingUser = allUsers.filter(user => (user.id).includes(ad.userId)).map(userFilterd =><div>{userFilterd.fname}</div>);



    // allUsers.map(user => (
    //   <div>{user.fname }</div>
    // ));
    // const advertisingUserID = (allUsers.fname)


    return (
      <Container className="d-flex ">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2 text-muted card text-center"
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.Category}</Card.Title>

          <Card.Text className="m-2 text-muted card text-center font-weight-bold">Details: {ad.Details}</Card.Text>
          <Card.Text className="m-2 text-muted card text-center font-weight-bold">Details: {}</Card.Text>
          <Card.Text className="m-2 text-muted card text-center font-weight-bold">Details: {}</Card.Text>
          <Card.Text className="m-2 text-muted card text-center font-weight-bold">Details: {ad.Details}</Card.Text>
          <Card.Text className="m-2 text-muted card text-center font-weight-bold">Details: {ad.Details}</Card.Text>

          <Card.Text></Card.Text>
          <Card.Text className="text-muted card text-center">Condition: {ad.Condition} </Card.Text>
      
       {/*users ( "fname": "Hanna",
        "lname": "Kantor"   
        "livingArea": "West",)
(      ads "userId": 3,) */}

       
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
