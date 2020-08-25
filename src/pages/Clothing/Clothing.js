import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'
import { Navbar, Nav, Form, FormControl, } from 'react-bootstrap';



class Clothing extends Component {
  render() {
    const { ads } = this.props;

    const ClothingPage = 1
    const clothingAds = ads.filter(ad => ad.CategoryId === ClothingPage)

    const clothingAdsUi = clothingAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

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

        <Row>{clothingAdsUi}</Row>
        <ListGroup variant="flush">
        </ListGroup>
      </div>


    );
  }
}

export default Clothing;


