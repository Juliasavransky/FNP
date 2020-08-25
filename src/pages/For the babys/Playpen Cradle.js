import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav } from 'react-bootstrap';


class PlaypenCradle extends Component {
    render() {

        const { ads } = this.props;
        const PlaypenCradlePage = 34
        const PlaypenCradleAds = ads.filter(ad => ad.SubCategoryId === PlaypenCradlePage)

        const PlaypenCradleAdsUi = PlaypenCradleAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#Furniture">Furniture</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Safety">Safety</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Carriages">Carriages</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Playpen Cradle">Playpen Cradle</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                
                <Row>{PlaypenCradleAdsUi}</Row>
                <ListGroup variant="flush">
                </ListGroup>
            </div>
        );
    }
}


export default PlaypenCradle;