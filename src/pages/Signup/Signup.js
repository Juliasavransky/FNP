import React, { Component } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fnameInput: '',
      lnameInput: '',
      emailInput: '',
      pwdInput: '',
      LivingAreaInput: '',
      CityInput: '',
      StreetNumberInput: '',
      ContactInput: '',
      readed: false,

      emailInputError: false,
      pwdInputError: false,
      redirectToHome: false,
    };
    //this.signup = this.signup.bind(this);
    this.validate = this.validate.bind(this);
    this.handleCreatUser = this.handleCreatUser.bind(this);
    this.cleanData = this.cleanData.bind(this);

  }

  validate = () => {

    if (this.state.pwdInput) {
      this.setState({
        pwdInputError: false,
      });
    }

    if (!this.state.emailInput.includes('@')) {
      this.setState({
        emailInputError: true,
      });
    }
  };
  signup = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCreatUser(event) {
    event.preventDefault();
    this.validate();
    console.log('pwd', this.state.pwdInputError);
    console.log('Email', this.state.emailInputError);

    if (!this.state.pwdInputError && !this.state.emailInputError) {
      const {
        fnameInput,
        lnameInput,
        emailInput,
        pwdInput,
        readed,
        LivingAreaInput,
        CityInput,
        StreetNumberInput,
        ContactInput,
      } = this.state;

      const newUser = {
        fname: fnameInput,
        lname: lnameInput,
        email: emailInput,
        pwd: pwdInput,
        LivingArea: LivingAreaInput,
        City: CityInput,
        StreetNumber: StreetNumberInput,
        Contact: ContactInput,
      };


      this.props.handleNewUser(newUser);

      if (newUser) {

        this.setState({
          redirectToHome: true
        });
      }

    }


  }
  cleanData() {
    this.setState({
      fnameInput: '',
      lnameInput: '',
      emailInput: '',
      pwdInput: '',
      LivingAreaInput: '',
      CityInput: '',
      StreetNumberInput: '',
      ContactInput: '',
      readed: false,
    });
  }

  render() {
    const {
      emailInputError,
      pwdInputError,
      redirectToHome,
      fnameInput,
      lnameInput,
      emailInput,
      pwdInput,
      LivingAreaInput,
      CityInput,
      StreetNumberInput,
      ContactInput,
      readed,
    } = this.state;

    if (redirectToHome) {
      return <Redirect to="/#" />;
    }

    return (
      <div className="c-signUp">
        <p id="passonLogo">PASS ON</p>
        <h3> NEW CUSTOMERS</h3>
        {/* <span>Sign Up</span> */}
        <a href="#/signup"></a>
        <Form onSubmit={this.handleCreatUser}>
          <Form.Row>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={fnameInput}
                onChange={this.signup}
                type="text"
                name="fnameInput"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={lnameInput}
                onChange={this.signup}
                type="text"
                name="lnameInput"
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={emailInput}
                onChange={this.signup}
                type="email"
                name="emailInput"
                placeholder="Enter email"
              />

              {emailInputError ? (
                <Alert variant="danger">
                  Invalid Credentials! Incorrect Email
                </Alert>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={pwdInput}
                onChange={this.signup}
                type="password"
                name="pwdInput"
                placeholder="Password"
              />

              {pwdInputError ? (
                <Alert variant="danger">
                  Invalid Credentials! Incorrect Password
                </Alert>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={ContactInput}
                onChange={this.signup}
                type="text"
                name="ContactInput"
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={StreetNumberInput}
                onChange={this.signup}
                placeholder="Main St"
                type="text"
                name="StreetNumberInput"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                value={CityInput}
                onChange={this.signup}
                name="CityInput"
                type="text"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                value={LivingAreaInput}
                name="LivingAreaInput"
                // onChange={(e) => this.setState({ LivingAreaInput: e.target.value })}
                onChange={this.signup}
                as="select"
              >
                <option value="0">Select a Area...</option>
                <option value="3" name="jerusalem" >
                  Jerusalem
                </option>
                <option value="1" name="center" >
                  Center
                </option>
                <option value="2" name="north">
                  North
                </option>
                <option value="4" name="south" >
                  South
                </option>
                <option value="5" name="west" >
                  West
                </option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              onChange={e => this.setState({ readed: e.target.checked })}
              type="checkbox"
              label="Read and Understood"
            />
            <Form.Check
              onChange={e => this.setState({ readed: e.target.checked })}
              type="checkbox"
              label="Remember Me"
            />
          </Form.Group>
          <Button onClick={this.cleanData} className="btn-register" variant="link" type="submit">
            REGISTER NOW
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
