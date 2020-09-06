import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav,CardColumns,Navbar, Form, Container, } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';



class Furniture extends Component {
    render() {

        const { ads } = this.props;
        const FurniturePage = 31
        const FurnitureAds = ads.filter(ad => ad.SubCategoryId === FurniturePage)

        const FurnitureAdsUi = FurnitureAds.map(ad =>   <AdCard key={ad.id}ad={ad} />)

        return(
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
                <CardColumns>{FurnitureAdsUi}</CardColumns>
                </Container>
            </div>
        );
    }
}


export default Furniture;