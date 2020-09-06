import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';


class Carriages extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const CarriagePage = 33
        const CarriageAds = ads.filter(ad => ad.SubCategoryId === CarriagePage)

        const CarriageAdsUi = CarriageAds.map(ad => <AdCard key={ad.id}ad={ad} />)

        return (
            <div className="c-adNavbar">
                <Navbar>
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
                <CardColumns>{CarriageAdsUi}</CardColumns>
                </Container>
            </div>
        );
    }
}

export default Carriages;