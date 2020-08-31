import React, { Component } from 'react';
import { ListGroup, Row, Col, Navbar, Nav, Form, FormControl, Container, CardColumns } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'


class ToysAndGames extends Component {
    render() {

        const { ads } = this.props;

        const ToysAndGamesPage = 2
        const ToysAndGamesAds = ads.filter(ad => ad.CategoryId === ToysAndGamesPage)
        // console.log(ads)
        // console.log(ToysAndGamesAds)
        const ToysAndGamesAdsUi = ToysAndGamesAds.map(ad => (<AdCard ad={ad} key={ad.id}/>
        ));
        return (
            <div className="c-adNavbar">
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" href="/#Dolls">Dolls</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Board Games">Board Games</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Books">Books</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Lego">Lego</Nav.Link>
                            <Nav.Link className="mr-5" href="/#Other">Other</Nav.Link>
                        </Nav>
                        <Form inline>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                <ListGroup variant="flush">
                <CardColumns>   {ToysAndGamesAdsUi}  </CardColumns> 
                </ListGroup>
                </Container>
            </div>
        );
    }
}

export default ToysAndGames;

