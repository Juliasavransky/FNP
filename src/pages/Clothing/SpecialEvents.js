import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, } from 'react-bootstrap';

class SpecialEvents extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const SpecialEventsPage = 12
        const SpecialEventsAds = ads.filter(ad => ad.SubCategoryId === SpecialEventsPage)

        const SpecialEventsAdsUi = SpecialEventsAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)
        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#coats">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" href="/#casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" href="/#special Events">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" href="/#shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
               Special Events
                <Row>{SpecialEventsAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}

export default SpecialEvents;