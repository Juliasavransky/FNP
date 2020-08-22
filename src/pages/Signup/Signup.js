import React, { Component } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';



class signup extends Component {

    constructor(props) {
        super(props);

        this.state = {

            fnameInput: "",
            lnameInput: "",
            emailInput: "",
            pwdInput: "",
            LivingAreaInput: "",
            CityInput: "",
            StreetNumberInput: "",
            phoneInput: "",
            readed: false,

            // emailInputError: false,
            // pwdInputError: false,
            redirectToHome: false,

        }
        this.signup = this.signup.bind(this);
        this.validate = this.validate.bind(this);

    }
    validate = () => {

        const emailInputError = "";
        const pwdInputError = "";
        
        this.state = {
            emailInputError: false,
            pwdInputError: false,
        }

        if (!this.state.pwdInput) {
            pwdInputError = " paswodr cannot be blank"
        }
        if (pwdInputError) {
            this.setState({
                pwdInputError: true
            });

        }


        if (!this.state.emailInput.includes("@")) {
            emailInputError = "Invalid email"
        }
        if (emailInputError) {
            this.setState({
                emailInputError: true
            });

        }

    }
    signup = () => {

        const { handlesignup } = this.props;
        console.log(this.state);

    }

    render() {

        const {
            emailInputError, pwdInputError, redirectToHome,
            fnameInput, lnameInput, emailInput, pwdInput,
            LivingAreaInput, CityInput, StreetNumberInput, ContactInput,
        } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />
        }

        return (
            <div className="c-login">
                <h3> Welcom to....</h3>
                <a href="#/signup"></a>
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={fnameInput}
                                onChange={(e) => this.setState({ fnameInput: e.target.value })}
                                type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={lnameInput}
                                onChange={(e) => this.setState({ lnameInput: e.target.value })}
                                type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={emailInput}
                                onChange={(e) => this.setState({ emailInput: e.target.value })}
                                type="email" placeholder="Enter email" />

                            {emailInputError ? <Alert variant="danger">
                                Invalid Credientails! incorrect email
                 </Alert> : null}
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={pwdInput}
                                onChange={(e) => this.setState({ pwdInput: e.target.value })}
                                type="password" placeholder="Password" />

                            {pwdInputError ? <Alert variant="danger">
                                Invalid Credientails! incorrect password
                 </Alert> : null}
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control value={ContactInput}
                            onChange={(e) => this.setState({ phoneInput: e.target.value })}
                            type="text" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={StreetNumberInput}
                            onChange={(e) => this.setState({ StreetNumberInput: e.target.value })}
                            placeholder="Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={CityInput}
                                onChange={(e) => this.setState({ CityInput: e.target.value })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control value={LivingAreaInput}
                                onChange={(e) => this.setState({ LivingAreaInput: e.target.value })}
                                as="select" >
                                <option value="jerusalem">Jerusalem</option>
                                <option value="center">Center</option>
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="west">West</option>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                    <Button onClick={this.signup} as={Col} variant="primary" type="button">
                        signup
                </Button>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check onChange={(e) => this.setState({ readed: e.target.checked })} type="checkbox" label="Read and understood" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default signup;