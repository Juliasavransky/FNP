import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import './adNavbar.css';
import AdCard from '../../components/AdCard/AdCard';
import Sorry from '../Sorry we didnt find/Sorry';
import { withRouter } from 'react-router-dom';

class AdNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchSelected: '',
      search: false,
      filteredAds: [],
    };
    this.search = this.search.bind(this);
  }

  search = e => {
    e.preventDefault();

    const { searchSelected } = this.state;
    const { ads } = this.props;

    const searchAds = ads.filter(
      ad =>
        ad.Details.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.categoryName.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.subCategoryName
          .toLowerCase()
          .includes(searchSelected.toLowerCase()) ||
        ad.Condition.toLowerCase().includes(searchSelected.toLowerCase())
    );

    const filteredAds = searchAds.map(ad => <AdCard ad={ad} key={ad.id} />);

    this.setState({ search: true });
    this.setState({ filteredAds: filteredAds });

    this.props.onSearch(filteredAds);

    // when the user click 'Search', the page should redirtect to '/search-results'
    this.props.history.push('/search-results');
  };

  render() {
    const {
      activeUser,
      ads,
      handleLogout,
      allUsers,
      handleCreatSmartAgent,
      requests,
      searchResults,
    } = this.props;
    const { searchSelected, filteredAds, search } = this.state;

    const LogOutUser = activeUser ? (
      <Nav.Link className="btnFont" onClick={() => handleLogout()} href="#" >
        Log Out
      </Nav.Link>
    ) : null;
    const signupUser = !activeUser ? (
      <Nav.Link className="btnFont" href="#/signup"  >
        Sign Up
      </Nav.Link>
    ) : null;
    const LogInUser = !activeUser ? (
      <Nav.Link className="btnFont" href="#/login"  >
        Log In
      </Nav.Link>
    ) : null;

    const UserArea = activeUser ? (
      <Nav.Link  href="/#UserArea">
        User Area
      </Nav.Link>
    ) : null;

    return (
      <div className="c-adNavbar">
        <Navbar
         >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat navFont">
              <Nav.Link className="mr-2 fas fa-baby-carriage" href="/#"> 
                Home
              </Nav.Link>
              <Nav.Link className="mr-2" href="/#Clothing">
                Clothing
              </Nav.Link>
              <Nav.Link className="mr-2" href="/#ToysAndGames">
                Toys And games
              </Nav.Link>
              <Nav.Link className="mr-2" href="/#ForTheBabys">
                For The Baby's
              </Nav.Link>
              <Nav.Link className="mr-2" href="/#ForMoms">
                For Mom's
              </Nav.Link>
              <Nav.Link className="mr-2" href="/#SmartAgent">
                Advanced Search
              </Nav.Link >
              {UserArea}
            </Nav>

            <Form className="navFont"
            inline onSubmit={this.search}>
              <FormControl
                value={searchSelected}
                onChange={e =>
                  this.setState({ searchSelected: e.target.value })
                }
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
              />
              {/* <Button className="navFont btnSearch"
               type="submit" variant="outline-success">
                Search
              </Button> */}
              <div  className="btnFont">
              {signupUser}
              {LogInUser}
              {LogOutUser}
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AdNavbar);
