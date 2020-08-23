import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, } from 'react-bootstrap';

class CoatsAndJackets extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const coatsAndJacketsPage = 11
        const coatsAndJacketsAds = ads.filter(ad => ad.SubCategoryId === coatsAndJacketsPage)

        const coatsAndJacketsAdsUi = coatsAndJacketsAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)
        return (
            <div className="c-adNavbar">
                CoatsAndJackets
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#CoatsandJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Special Events">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

               

                <ListGroup variant="flush">
                    <Form.Label className="mr-2">Category</Form.Label>
                    <Row>{coatsAndJacketsAdsUi}</Row>
                </ListGroup>
            </div>
        );
    }
}

export default CoatsAndJackets;