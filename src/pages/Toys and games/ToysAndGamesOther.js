import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, FormControl, Container, } from 'react-bootstrap';



class ToysAndGamesOther extends Component {

  render() {
    const { ads } = this.props;

    const ToysAndGamesOtherPage = 25
    const ToysAndGamesOtherAds = ads.filter(ad => ad.SubCategoryId === ToysAndGamesOtherPage)

    const ToysAndGamesOtherAdsUi = ToysAndGamesOtherAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

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
        <Container>
        <Row>{ToysAndGamesOtherAdsUi}</Row>
        <ListGroup variant="flush">
        </ListGroup>
        </Container>
      </div>


    );
  }
}

export default ToysAndGamesOther;


