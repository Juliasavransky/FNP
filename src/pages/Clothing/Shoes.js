import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, } from 'react-bootstrap';


class Shoes extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const ShoesPage = 14
        const shoesAds = ads.filter(ad => ad.SubCategoryId === ShoesPage)

        const ShoesAdsUi = shoesAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" href="/#casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" href="/#SpecialEvents">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#ClothingOther">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
             
                <Row>{ShoesAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}

export default Shoes;