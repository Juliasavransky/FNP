import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'
import { Navbar, Nav, Form, FormControl, } from 'react-bootstrap';



class Lego extends Component {

  render() {
    const { ads } = this.props;

    const LegoPage = 24
    const LegoAds = ads.filter(ad => ad.SubCategoryId === LegoPage)

    const LegoAdsUi = LegoAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

    return(
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" href="/#BoardGames">Board Games</Nav.Link>
              <Nav.Link className="mr-5" href="/#Books">Books</Nav.Link>
              <Nav.Link className="mr-5" href="/#Dolls">Dolls</Nav.Link>
              <Nav.Link className="mr-5" href="/#Lego">Lego</Nav.Link>
              <Nav.Link className="mr-5" href="/#ToysAndGamesOther">Other</Nav.Link>
            </Nav>
            <Form inline>
            </Form>
          </Navbar.Collapse>

        </Navbar>

        <Row>{LegoAdsUi}</Row>
        <ListGroup variant="flush">
        </ListGroup>
      </div>


    );
  }
}

export default Lego;


