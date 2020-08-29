import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav } from 'react-bootstrap';
import { Navbar, Form, Container, } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';



class Furniture extends Component {
    render() {

        const { ads } = this.props;
        const FurniturePage = 31
        const FurnitureAds = ads.filter(ad => ad.SubCategoryId === FurniturePage)

        const FurnitureAdsUi = FurnitureAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return(
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
                <Row>{FurnitureAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
                </Container>
            </div>
        );
    }
}


export default Furniture;