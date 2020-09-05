import React, { Component } from 'react';
import { Form, Alert, Button, Col, Row, variant } from 'react-bootstrap';
import './Login.css';
import { Redirect } from 'react-router-dom';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: 'hannakantor@gmail.com',
      pwdInput: '',
      showLogInError: false,
      redirectToHome: false,
    };

    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    const { emailInput, pwdInput } = this.state;
    const { allUsers, handleLogin } = this.props;
    const userFound = allUsers.find(
      user => emailInput === user.email && pwdInput === user.pwd
    );

    if (userFound) {
      handleLogin(userFound);
      this.setState({
        redirectToHome: true,
      });
    } else {
      this.setState({
        showLogInError: true,
      });
    }
  }

  render() {
    const { showLogInError, emailInput, pwdInput, redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to="/#" />;
    }

    return (
      <div className="c-login">
        <h3> EXISTING CUSTOMERS</h3>
        <h3> Sign Into</h3>
        <br></br>
        <Form onSubmit={this.login}>
          {showLogInError ? (
            <Alert variant="danger">
              Invalid Credientails! incorrect email or password
            </Alert>
          ) : null}
          <Form.Row>
            <Form.Group controlId="formGridEmail" className="form-group">
              <Form.Label>EMAIL ADDRESS</Form.Label>
              <Form.Control
                value={emailInput}
                onChange={e =>
                  this.setState({
                    emailInput: e.target.value,
                    showLogInError: false,
                  })
                }
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword" className="form-group">
              <Form.Label>YOUR PASSWORD</Form.Label>
              <Form.Control
                value={pwdInput}
                onChange={e =>
                  this.setState({
                    pwdInput: e.target.value,
                    showLogInError: false,
                  })
                }
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group id="formGridCheckbox">
              <Form.Check
                onChange={e => this.setState({ readed: e.target.checked })}
                type="checkbox"
                label="Remember Me"
              />
            </Form.Group>
            <Button className="btn-login" variant="primary" type="submit">
              LOGIN
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
export default login;
