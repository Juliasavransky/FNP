import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'
import { Navbar, Nav, Form, FormControl, Container, CardColumns} from 'react-bootstrap';



class Dolls extends Component {

  render() {
    const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

    const DollsPage = 21
    const DollsAds = ads.filter(ad => ad.SubCategoryId === DollsPage)

    const DollsAdsUi = DollsAds.map(ad =>   <AdCard key={ad.id} ad={ad} />)

    return(
      <div className="c-adNavbar">
        <Navbar >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" id="hover" href="/#BoardGames">Board Games</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#Books">Books</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#Dolls">Dolls</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#Lego">Lego</Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#ToysAndGamesOther">Other</Nav.Link>
            </Nav>
            <Form >
            </Form>
          </Navbar.Collapse>

        </Navbar>
        <Container>
        <CardColumns>{DollsAdsUi}</CardColumns>
        </Container>
      </div>


    );
  }
}

export default Dolls;


