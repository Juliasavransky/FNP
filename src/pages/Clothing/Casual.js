import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, } from 'react-bootstrap';


class Casual extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const CasualPage = 13
        const CasualAds = ads.filter(ad => ad.SubCategoryId === CasualPage)

        const CasualAdsUi = CasualAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" href="/#specialEvents">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
               
                <Row>{CasualAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}

export default Casual;