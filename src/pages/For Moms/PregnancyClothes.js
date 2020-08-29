import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, FormControl, Container, } from 'react-bootstrap';



class PregnancyClothes extends Component {
    render() {
        const { ads } = this.props;

        const PregnancyClothesPage = 41
        const PregnancyClothesAds = ads.filter(ad => ad.SubCategoryId === PregnancyClothesPage)

        const PregnancyClothesAdsUi = PregnancyClothesAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#PregnancyClothes">Pregnancy Clothes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#BreastPumps">Breast Pumps</Nav.Link>
                            <Nav.Link className="mr-5" href="/#BooksForMoms">Books For Mom's</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Supplements">Supplements</Nav.Link>
                            <Nav.Link className="mr-5" href="/#ForMomsOther">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                <ListGroup variant="flush">
                    <Row>{PregnancyClothesAdsUi}</Row>
                </ListGroup>
                </Container>
            </div>
        );
    }
}

export default PregnancyClothes;