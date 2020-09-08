import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, Container ,CardColumns} from 'react-bootstrap';

class PregnancyClothes extends Component {
  render() {
    const { ads } = this.props;

    const PregnancyClothesPage = 41;
    const PregnancyClothesAds = ads.filter(
      ad => ad.SubCategoryId === PregnancyClothesPage
    );

    const PregnancyClothesAdsUi = PregnancyClothesAds.map(ad => (
        <AdCard ad={ad} key={ad.id}/>
    ));

    return (
      <div className="c-adNavbar">
        <Navbar >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" id="hover"href="#/PregnancyClothes">
                Pregnancy Clothes
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="#/BreastPumps">
                Breast Pumps
              </Nav.Link>
              <Nav.Link className="mr-5" id="hover"href="#/BooksForMoms">
                Books For Mom's
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="#/Supplements">
                Supplements
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="#/ForMomsOther">
                Other
              </Nav.Link>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
            <CardColumns>{PregnancyClothesAdsUi}</CardColumns>
        </Container>
      </div>
    );
  }
}

export default PregnancyClothes;
