import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Home page/Homepage';
import SmartAgent from './pages/Smart agent/SmartAgent';
import { Switch, Route, withRouter } from 'react-router-dom';
import AdNavbar from '../src/components/Navbar/AdNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clothing from '../src/pages/Clothing/Clothing';
import ToysAndGames from '../src/pages/Toys and games/Toys and games';
import ForMoms from '../src/pages/For Moms/For Moms';
import jsonUsers from '../src/data/users.json';
import jsonAds from '../src/data/Ads.json';
// import jsonSmartAgent from './data/smartAgent.json';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Furniture from './pages/For the babys/furniture';
import Safety from './pages/For the babys/safety';
import Carriages from './pages/For the babys/carriages';
import CoatsAndJackets from './pages/Clothing/Coats and Jackets';
import ClothingOther from './pages/Clothing/ClothingOther';
import Shoes from './pages/Clothing/Shoes';
import SpecialEvents from './pages/Clothing/SpecialEvents';
import Casual from './pages/Clothing/Casual';
import BooksForMoms from './pages/For Moms/Booksformoms';
import BreastPumps from './pages/For Moms/Breast Pumps';
import BoardGames from './pages/Toys and games/Board games';
import ForMomsOther from './pages/For Moms/ForMomsOther';
import Supplements from './pages/For Moms/Supplements';
import Books from './pages/Toys and games/books';
import Dolls from './pages/Toys and games/dolls';
import Lego from './pages/Toys and games/Lego';
import ToysAndGamesOther from './pages/Toys and games/ToysAndGamesOther';
import PlaypenCradle from './pages/For the babys/Playpen Cradle';
import ForTheBabysOther from './pages/For the babys/ForTheBabysOther';
import ForTheBabys from './pages/For the babys/For the babys';
import PregnancyClothes from './pages/For Moms/PregnancyClothes';
import Emptypage from './pages/Footer/emptypage';
import MoreInfoPage from './pages/MoreInfoPage/MoreInfoPage';
import UserArea from './pages/Login/UserArea/UserArea';
import SearchResults from './components/Navbar/SearchResults';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewAdModal from './components/New Ad Modal/NewAdModal';
import emailjs from 'emailjs-com';
import RequestForItem from './components/Request for item/RequestForItem';
import Sorry from './components/Sorry we didnt find/Sorry';
emailjs.init('user_92TMg4RqAMZUj3a9Jc5NQ');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: null,
      allUsers: jsonUsers,
      ads: jsonAds,
      // requests:jsonSmartAgent,
      searchResults: [],
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreatNewAd = this.handleCreatNewAd.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleCreatSmartNewAgent = this.handleCreatSmartNewAgent.bind(this);
  }

  componentDidMount() {
    // will run only the first time the application is loading
    // will display the all users from the JSON only
    console.log('All Users', this.state.allUsers);
  }

  componentDidUpdate() {
    // Will run every time the component is being updated
    // Everytime you call 'this.setState' the component will render and this function will run again
    console.log('All Users', this.state.allUsers);
  }

  handleLogout() {
    this.setState({
      activeUser: null,
    });
  }

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser,
    });
  }

  handleNewUser(newUser) {
    // generate new user id (total users + 1)
    newUser.id = this.state.allUsers.length + 1;

    // add the new user to the 'allUsers' state
    this.setState({ allUsers: [...this.state.allUsers, newUser] });

    // redirect to the 'sign-in' page
    this.props.history.push('/Login');

    // show toast notification that the user has been created
    toast.success('New User Added');
  }

  handleCreatNewAd(newAd) {
    console.log('hello');
    newAd.id = this.state.ads.length + 1;
    this.setState({
      ads: [...this.state.ads, newAd],
    });
    toast.success('New ad Added');
  }

  handleCreatSmartNewAgent(newAgent) {
    console.log('hello');
    newAgent.id = this.state.agents.length + 1;
    this.setState({
      agents: [...this.state.agents, newAgent],
    });
    toast.success('New Smart Agent addet');
  }

  handleSearch = searchResults => {
    this.setState({ searchResults: searchResults });
  };

  render() {
    const { activeUser, allUsers, ads, searchResults, requests } = this.state;

    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <AdNavbar
          ads={ads}
          searchResults={searchResults}
          allUsers={allUsers}
          handleLogout={this.handleLogout}
          activeUser={activeUser}
          onSearch={this.handleSearch}
        />

        <Switch>
          <Route exact path="/">
            <Homepage
              ads={ads}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/Clothing">
            <Clothing
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/CoatsAndJackets">
            <CoatsAndJackets
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ClothingOther">
            <ClothingOther
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Shoes">
            <Shoes
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/SpecialEvents">
            <SpecialEvents
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Casual">
            <Casual
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ToysAndGames">
            <ToysAndGames
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/BoardGames">
            <BoardGames
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Books">
            <Books
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Dolls">
            <Dolls
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Lego">
            <Lego
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ToysAndGamesOther">
            <ToysAndGamesOther
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ForTheBabys">
            <ForTheBabys
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Furniture">
            <Furniture
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/safety">
            <Safety
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/carriages">
            <Carriages
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/PlaypenCradle">
            <PlaypenCradle
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ForTheBabysOther">
            <ForTheBabysOther
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ForMoms">
            <ForMoms
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/BooksForMoms">
            <BooksForMoms
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/BreastPumps">
            <BreastPumps
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/ForMomsOther">
            <ForMomsOther
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/PregnancyClothes">
            <PregnancyClothes
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Supplements">
            <Supplements
              ads={ads}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/SmartAgent">
            <SmartAgent
              ads={ads}
              handleLogout={this.handleLogout}
              allUsers={allUsers}
              activeUser={activeUser}
              searchResults={searchResults}
              requests={requests}
            />
          </Route>

          <Route exact path="/signup">
            <Signup
              handleNewUser={this.handleNewUser}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/Login">
            <Login
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/product/:id">
            <MoreInfoPage
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/emptypage">
            <Emptypage
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
            />
          </Route>

          <Route exact path="/userArea">
            <UserArea
              ads={ads}
              requests={requests}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              handleCreatNewAd={this.handleCreatNewAd}
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/newAdModal">
            <NewAdModal
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              handleCreatNewAd={this.handleCreatNewAd}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/requestForItem">
            <RequestForItem
              ads={ads}
              handleLogin={this.handleLogin}
              requests={requests}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/sorry">
            <Sorry
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              handleCreatNewAd={this.handleCreatNewAd}
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              requests={requests}
              searchResults={searchResults}
            />
          </Route>

          <Route path="/search-results">
            <SearchResults
              activeUser={activeUser}
              ads={ads}
              handleLogin={this.handleLogin}
              requests={requests}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              searchResults={searchResults}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
