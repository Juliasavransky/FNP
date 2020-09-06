import React, { Component } from 'react';
import { ListGroup, Nav, Navbar, Form, Container, CardColumns } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';



class ForTheBabys extends Component {
    render() {

        const { ads } = this.props;
        const ForTheBabysPage = 3
        const ForTheBabysAds = ads.filter(ad => ad.CategoryId === ForTheBabysPage)

        const ForTheBabysAdsUi = ForTheBabysAds.map(ad => <AdCard ad={ad} key={ad.id}/>)

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
                <CardColumns>{ForTheBabysAdsUi}</CardColumns>
                </Container>
            </div>
        );
    }
}

export default ForTheBabys;

