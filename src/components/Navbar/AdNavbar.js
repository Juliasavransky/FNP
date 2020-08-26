import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col, Row } from 'react-bootstrap';
import './adNavbar.css'
import AdCard from '../../components/AdCard/AdCard'



class adNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
    console.log(this.state);
    this.search = this.search.bind(this);

  }

  search = (e) => {
    const { search } = this.state;

    this.setState({
      search: e.target.value
    })
    console.log(search);

  }

  render() {

    const { activeUser, ads, handleLogout, allUsers, } = this.props;
    const { search } = this.state;

    const LogOutUser = activeUser ? <Button onClick={() => handleLogout()} href="#" variant="secondary">LogOut</Button> : null
    const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null
    const LogInUser = !activeUser ? <Button href="#/login" variant="secondary">LogIn</Button> : null
    
    // const clothingAds = ads.filter(ad => ad.CategoryId === ClothingPage)
    // const clothingAdsUi = clothingAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)

    const searchUpdated = ads.filter(ad => ad.Category || ad.SubCategory || ad.details === search)
    const searchUpdatedUi = searchUpdated.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

    console.log(searchUpdated);

    // const SmartAgentIn = activeUser ? <Nav.Link className="mr-5" href="/#SmartAgent">Smart Agent</Nav.Link> : null

    return (
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              {/* {SmartAgentIn} */}
              {/* <Row>{searchUpdatedUi}</Row>  */}
              <Nav.Link className="mr-5" href="/">Home</Nav.Link>
              <Nav.Link className="mr-5" href="/#Clothing">Clothing</Nav.Link>
              <Nav.Link className="mr-5" href="/#ToysAndGames">Toys and games</Nav.Link>
              <Nav.Link className="mr-5" href="/#ForTheBabys">For the baby's</Nav.Link>
              <Nav.Link className="mr-5" href="/#ForMoms">For Mom's</Nav.Link>
              <Nav.Link className="mr-5" href="/#SmartAgent">Smart Agent</Nav.Link>
              {LogOutUser}
              {signupUser}
              {LogInUser}
            </Nav>
            <Form inline>
              <FormControl
                value={search} onChange={(e) => this.setState({ search: e.target.value })}
                type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={this.search} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

  }

}


export default adNavbar;