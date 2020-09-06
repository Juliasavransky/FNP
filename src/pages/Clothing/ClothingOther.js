import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';

class ClothingOther extends Component {
  render() {

    const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

    const ClothingOtherPage = 15
    const ClothingOtherAds = ads.filter(ad => ad.SubCategoryId === ClothingOtherPage)

    const ClothingOtherAdsUi = ClothingOtherAds.map(ad => <AdCard ad={ad} key={ad.id}/>)

    return (
      <div className="c-adNavbar">
      
        <Navbar >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" id="hover" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#Casual">Casual</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#SpecialEvents">Special Events</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#Shoes">Shoes</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#ClothingOther">Other</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <CardColumns>{ClothingOtherAdsUi}</CardColumns>
        </Container>
      </div>
    );
  }
}

export default ClothingOther;