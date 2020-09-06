import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, FormControl, Container,CardColumns } from 'react-bootstrap';

class BreastPumps extends Component {
  render() {
    const { ads } = this.props;

    const BreastPumpsPage = 42;
    const BreastPumpsAds = ads.filter(
      ad => ad.SubCategoryId === BreastPumpsPage
    );

    const BreastPumpsAdsUi = BreastPumpsAds.map(ad => (
      
        <AdCard ad={ad} key={ad.id}/>
      
    ));

    return (
      <div className="c-adNavbar">
        <Navbar >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5"id="hover" href="/#PregnancyClothes">
                Pregnancy Clothes
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="/#BreastPumps">
                Breast Pumps
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="/#BooksForMoms">
                Books For Mom's
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="/#Supplements">
                Supplements
              </Nav.Link>
              <Nav.Link className="mr-5" id="hover" href="/#ForMomsOther">
                Other
              </Nav.Link>
            </Nav>
            <Form ></Form>
          </Navbar.Collapse>
        </Navbar>
        <Container>
     
            <CardColumns>{BreastPumpsAdsUi}</CardColumns>
        </Container>
      </div>
    );
  }
}

export default BreastPumps;
