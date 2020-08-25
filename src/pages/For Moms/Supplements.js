import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, FormControl, } from 'react-bootstrap';



class Supplements extends Component {
    render() {
        const { ads } = this.props;

        const SupplementsPage = 44
        const SupplementsAds = ads.filter(ad => ad.SubCategoryId === SupplementsPage)

        const SupplementsAdsUi = SupplementsAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#PregnancyClothes">Pregnancy Clothes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#BreastPumps">Breast Pumps</Nav.Link>
                            <Nav.Link className="mr-5" href="/#BooksForMoms">Books For Moms</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Supplements">Supplements</Nav.Link>
                            <Nav.Link className="mr-5" href="/#ForMomsOther">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
              
                <ListGroup variant="flush">
                    <Row>{SupplementsAdsUi}</Row>
                </ListGroup>
            </div>
        );
    }
}

export default Supplements;