import React, { Component } from 'react';
import AdCard from '../../components/AdCard/AdCard'
import { ListGroup, Row, Col, Navbar, Nav, Form, Container, CardColumns } from 'react-bootstrap';

class CoatsAndJackets extends Component {
    render() {

        const { ads, activeUser, allUsers, handleLogin, handleLogout } = this.props;

        const CoatsAndJacketsPage = 11
        const CoatsAndJacketsAds = ads.filter(ad => ad.SubCategoryId === CoatsAndJacketsPage)

        const CoatsAndJacketsAdsUi = CoatsAndJacketsAds.map(ad =>   <AdCard ad={ad}key={ad.id} />)
        return (
            <div className="c-adNavbar">
                
                <Navbar >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" id="hover" href="/#CoatsAndJackets">Coats and Jackets</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Casual">Casual</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#SpecialEvents">Special Events</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#Shoes">Shoes</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="/#ClothingOther">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

               
                <Container>
                <ListGroup variant="flush">
                    {/* <Form.Label className="mr-2">Category</Form.Label> */}
                 
                    <CardColumns>{CoatsAndJacketsAdsUi}</CardColumns>
                </ListGroup>
                </Container>
            </div>
        );
    }
}

export default CoatsAndJackets;