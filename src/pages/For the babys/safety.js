import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav, Form, Navbar, Container,CardColumns } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';

class Safety extends Component {

    render() {

        const { ads } = this.props;
        const SafetyPage = 32
        const SafetyAds = ads.filter(ad => ad.SubCategoryId === SafetyPage)

        const SafetyAdsUi = SafetyAds.map(ad =>  <AdCard ad={ad} key={ad.id} />)
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
                    <Nav.Link className="mr-5" href="/#PlaypenCradle">Playpen Cradle</Nav.Link>
                </Nav>
                <Form inline>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <Container>
        <CardColumns>{SafetyAdsUi}</CardColumns>
        <ListGroup variant="flush">
        </ListGroup>
        </Container>
    </div>
        );
    }
}

export default Safety;