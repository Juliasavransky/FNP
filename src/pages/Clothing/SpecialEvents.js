import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, Container,CardColumns } from 'react-bootstrap';

class SpecialEvents extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const SpecialEventsPage = 12
        const SpecialEventsAds = ads.filter(ad => ad.SubCategoryId === SpecialEventsPage)

        const SpecialEventsAdsUi = SpecialEventsAds.map(ad =>  <AdCard key={ad.id} ad={ad} />)
        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" href="/#SpecialEvents">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#ClothingOther">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                <CardColumns>{SpecialEventsAdsUi}</CardColumns>
                <ListGroup variant="flush">
                </ListGroup>
                </Container>
            </div>
        );
    }
}

export default SpecialEvents;