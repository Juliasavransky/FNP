import React, { Component } from 'react';
import { ListGroup,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import { Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';

class ForMoms extends Component {
  render() {
    const { ads } = this.props;

    const ForMomsPage = 4;
    const ForMomsAds = ads.filter(ad => ad.CategoryId === ForMomsPage);

    const ForMomsAdsUi = ForMomsAds.map(ad => (<AdCard ad={ad} key={ad.id}/>
  
    ));

    return (
      <div className="c-adNavbar font">
        <Navbar >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              <Nav.Link className="mr-5" id="hover" href="#/PregnancyClothes">
                Pregnancy Clothes
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="#/BreastPumps">
                Breast Pumps
              </Nav.Link>
              <Nav.Link className="mr-5"id="hover" href="#/BooksForMoms">
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
          <CardColumns >
         {ForMomsAdsUi}
         </CardColumns >
        </Container>
      </div>
    );
  }
}

export default ForMoms;
