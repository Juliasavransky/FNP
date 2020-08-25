import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, } from 'react-bootstrap';


class Carriage extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const CarriagePage = 33
        const CarriageAds = ads.filter(ad => ad.SubCategoryId === CarriagePage)

        const CarriageAdsUi = CarriageAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#Furniture">Furniture</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Safety">Safety</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Carriages">Carriages</Nav.Link>
                            <Nav.Link className="mr-5" href="/#ForTheBabysOther">Other</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Playpen Cradle">Playpen Cradle</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
             
                <Row>{CarriageAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}

export default Carriage;