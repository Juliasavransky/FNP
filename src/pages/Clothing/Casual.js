import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';


class Casual extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const CasualPage = 13
        const CasualAds = ads.filter(ad => ad.SubCategoryId === CasualPage)

        const CasualAdsUi = CasualAds.map(ad => <AdCard key={ad.id} ad={ad} />)

        return (
            <div className="c-adNavbar">

                <Navbar 
                >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" id="hover" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#specialEvents">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>

                    <CardColumns> {CasualAdsUi} </CardColumns>

                    <ListGroup variant="flush">
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default Casual;