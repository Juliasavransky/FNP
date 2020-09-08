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
                <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto cat">
                            <Nav.Link className="mr-5" id="hover" href="#/Dolls">Board Games</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="#/Board Games">Books</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="#/Books">Dolls</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="#/Lego">Lego</Nav.Link>
                            <Nav.Link className="mr-5" id="hover" href="#/Other">Other</Nav.Link>
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

