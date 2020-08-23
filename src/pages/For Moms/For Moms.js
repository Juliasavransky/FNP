import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, FormControl, } from 'react-bootstrap';



class ForMoms extends Component {
    render() {
        const { ads } = this.props;

        const ForMomsPage = 4
        const ForMomsAds = ads.filter(ad => ad.CategoryId === ForMomsPage)

        const ForMomsAdsUi = ForMomsAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#Pregnancy Clothes">Pregnancy Clothes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Breast Pumps">Breast Pumps</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Books">Books</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Supplements">Supplements</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                ForMoms
                <ListGroup variant="flush">
                    <Row>{ForMomsAdsUi}</Row>
                </ListGroup>
            </div>
        );
    }
}

export default ForMoms;

