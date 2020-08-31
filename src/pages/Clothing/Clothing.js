import React, { Component } from 'react';
import { ListGroup, } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';

class Clothing extends Component {
  render() {
    const { ads } = this.props;

    const ClothingPage = 1;
    const clothingAds = ads.filter(ad => ad.CategoryId === ClothingPage);
    //  console.log("ads", ads)
    //  console.log("clothingAds", clothingAds)
    const clothingAdsUi = clothingAds.map(ad => (<AdCard ad={ad} key={ad.id}/>
     
      
    ));

    return (
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" href="/#CoatsAndJackets">
                Coats and Jackets
              </Nav.Link>
              <Nav.Link className="mr-5" href="/#Casual">
                Casual
              </Nav.Link>
              <Nav.Link className="mr-5" href="/#SpecialEvents">
                Special Events
              </Nav.Link>
              <Nav.Link className="mr-5" href="/#Shoes">
                Shoes
              </Nav.Link>
              <Nav.Link className="mr-5" href="/#ClothingOther">
                Other
              </Nav.Link>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <CardColumns>
        {clothingAdsUi}
        </CardColumns>
        <ListGroup variant="flush"></ListGroup>
        </Container>
      </div>
    );
  }
}

export default Clothing;
