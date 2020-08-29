import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import './adNavbar.css';
import AdCard from '../../components/AdCard/AdCard';

class adNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    // console.log(this.state);
    this.search = this.search.bind(this);
  }

  search = (e) => {
    const { searchSelected } = this.state;
    const { ads } = this.props;

    

    const searchAds = searchSelected.filter(
      ad =>
        ad.Details.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.categoryName.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.subCategoryName
          .toLowerCase()
          .includes(searchSelected.toLowerCase()) ||
        ad.Condition.toLowerCase().includes(searchSelected.toLowerCase())
    );

    const filteredAds = searchAds.map(ad => (
      <Col key={ad.id} lg={3} md={4} sm={6}>
        <AdCard ad={ad} />
      </Col>
    ));

    this.setState({
      searchSelected: e.target.value
    })
    console.log('searchSelected', searchSelected);

  }

  render() {

    const { activeUser, ads, handleLogout, allUsers, } = this.props;
    const { searchSelected } = this.state;

    const LogOutUser = activeUser ? (
      <Button onClick={() => handleLogout()} href="#" variant="secondary">
        LogOut
      </Button>
    ) : null;
    const signupUser = !activeUser ? (
      <Button href="#/signup" variant="secondary" className="btn-userLogin">
        Signup
      </Button>
    ) : null;
    const LogInUser = !activeUser ? (
      <Button href="#/login" variant="secondary" className="btn-userLogin">
        LogIn
      </Button>
    ) : null;

    const UserArea = activeUser ? 
    <Nav.Link className="mr-4" href="/#UserArea">
      User Area
    </Nav.Link>
    : null;

    return (
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
         
              <Nav.Link className="mr-4" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mr-4" href="/#Clothing">
                Clothing
              </Nav.Link>
              <Nav.Link className="mr-4" href="/#ToysAndGames">
                Toys and games
              </Nav.Link>
              <Nav.Link className="mr-4" href="/#ForTheBabys">
                For the baby's
              </Nav.Link>
              <Nav.Link className="mr-4" href="/#ForMoms">
                For Mom's
              </Nav.Link>
              <Nav.Link className="mr-4" href="/#SmartAgent">
                Smart Agent
              </Nav.Link> 
              {UserArea}
              {signupUser}
              {LogInUser}
              {LogOutUser}
            </Nav>
            <Form inline>
              <FormControl
               style={{ width: '6rem' }}
                // value={search}
                onChange={e => this.setState({ search: e.target.value })}
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
                
              />
              <Button size="sm-2" onClick={this.search} variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default adNavbar;
