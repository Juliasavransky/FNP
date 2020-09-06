import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav, Navbar, Form, Container, CardColumns } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';



class ForTheBabysOther extends Component {
    render() {

        const { ads } = this.props;
        const ForTheBabysOtherPage = 35
        const ForTheBabysOtherAds = ads.filter(ad => ad.SubCategoryId === ForTheBabysOtherPage)

        const ForTheBabysOtherAdsUi = ForTheBabysOtherAds.map(ad => <AdCard key={ad.id} ad={ad} />)

        return (
            <div className="c-adNavbar">
                <Navbar >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" id="hover" href="/#Furniture">Furniture</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Safety">Safety</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Carriages">Carriages</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#ForTheBabysOther">Other</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#PlaypenCradle">Playpen Cradle</Nav.Link>
                        </Nav>
                        <Form >
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                <CardColumns>{ForTheBabysOtherAdsUi}</CardColumns>
               </Container>
            </div>
        );
    }
}

export default ForTheBabysOther;

