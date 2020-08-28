import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav, Navbar, Form } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';



class ForTheBabys extends Component {
    render() {

        const { ads } = this.props;
        const ForTheBabysPage = 3
        const ForTheBabysAds = ads.filter(ad => ad.CategoryId === ForTheBabysPage)

        const ForTheBabysAdsUi = ForTheBabysAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

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

                <Row>{ForTheBabysAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}

export default ForTheBabys;

