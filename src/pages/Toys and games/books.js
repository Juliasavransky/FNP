import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { Navbar, Nav, Form, FormControl, Container,CardColumns } from 'react-bootstrap';



class Books extends Component {

  render() {
    const { ads } = this.props;

    const BooksPage = 23
    const BooksAds = ads.filter(ad => ad.SubCategoryId === BooksPage)

    const BooksAdsUi = BooksAds.map(ad =>  <AdCard key={ad.id} ad={ad} />)

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
        <CardColumns>{BooksAdsUi}</CardColumns>
        </Container>
      </div>


    );
  }
}

export default Books;


