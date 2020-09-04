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
      <Button onClick={() => handleLogout()} href="#" variant="secondary">
        Log Out
      </Button>
    ) : null;
    const signupUser = !activeUser ? (
      <Button href="#/signup" variant="secondary" className="btn-userLogin">
        Sign Up
      </Button>
    ) : null;
    const LogInUser = !activeUser ? (
      <Button href="#/login" variant="secondary" className="btn-userLogin">
        Log In
      </Button>
    ) : null;

    const UserArea = activeUser ? (
      <Nav.Link className="mr-2" href="/#UserArea">
        User Area
      </Nav.Link>
    ) : null;

    return (
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
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
              <Nav.Link className="mr-4" href="/#SmartAgent">
                Advanced Search
              </Nav.Link>
              {UserArea}
              {signupUser}
              {LogInUser}
              {LogOutUser}
            </Nav>

            <Form inline onSubmit={this.search}>
              <FormControl
                style={{ width: '14rem' }}
                value={searchSelected}
                onChange={e =>
                  this.setState({ searchSelected: e.target.value })
                }
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
              />
              <Button size="sm-2" type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AdNavbar);
