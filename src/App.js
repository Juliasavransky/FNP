import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AdNavbar from './components/Navbar/AdNavbar';
import SearchResults from './components/Navbar/SearchResults';
import NewAdModal from './components/New Ad Modal/NewAdModal';
import RequestForItem from './components/Request for item/RequestForItem';
import Sorry from './components/Sorry we didnt find/Sorry';
import ZoomInAd from './components/ZoomInAd/zoomInAd';
import jsonAds from './data/Ads.json';
import jsonSmartAgent from './data/smartAgent.json';
import jsonUsers from './data/users.json';
import Casual from './pages/Clothing/Casual';
import Clothing from './pages/Clothing/Clothing';
import ClothingOther from './pages/Clothing/ClothingOther';
import CoatsAndJackets from './pages/Clothing/Coats and Jackets';
import Shoes from './pages/Clothing/Shoes';
import SpecialEvents from './pages/Clothing/SpecialEvents';
import Emptypage from './pages/Footer/emptypage';
import BooksForMoms from './pages/For Moms/Booksformoms';
import BreastPumps from './pages/For Moms/Breast Pumps';
import ForMoms from './pages/For Moms/For Moms';
import ForMomsOther from './pages/For Moms/ForMomsOther';
import PregnancyClothes from './pages/For Moms/PregnancyClothes';
import Supplements from './pages/For Moms/Supplements';
import Carriages from './pages/For the babys/carriages';
import ForTheBabys from './pages/For the babys/For the babys';
import ForTheBabysOther from './pages/For the babys/ForTheBabysOther';
import Furniture from './pages/For the babys/furniture';
import PlaypenCradle from './pages/For the babys/Playpen Cradle';
import Safety from './pages/For the babys/safety';
import Homepage from './pages/Home page/Homepage';
import Login from './pages/Login/Login';
import UserArea from './pages/Login/UserArea/UserArea';
import MoreInfoPage from './pages/MoreInfoPage/MoreInfoPage';
import Signup from './pages/Signup/Signup';
import SmartAgent from './pages/Smart agent/SmartAgent';
import BoardGames from './pages/Toys and games/Board games';
import Books from './pages/Toys and games/books';
import Dolls from './pages/Toys and games/dolls';
import Lego from './pages/Toys and games/Lego';
import ToysAndGames from './pages/Toys and games/Toys and games';
import ToysAndGamesOther from './pages/Toys and games/ToysAndGamesOther';
import Maps from './pages/maps';
import { dataLivingAreas } from './data/ddData';

emailjs.init('user_92TMg4RqAMZUj3a9Jc5NQ');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: null,
      allUsers: jsonUsers,
      ads: jsonAds,
      requests: jsonSmartAgent,
      searchResults: [],
      executeSAgent: false,
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
    //console.log('All Users', this.state.allUsers);

    if (this.state.executeSAgent) {
      this.executeSmartAgents(
        this.state.requests,
        this.state.allUsers,
        this.state.ads
      );

      this.setState({ executeSAgent: false });
    }
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

    // will trigger the smart agent notification system
    this.setState({ executeSAgent: true });
  }

  handleCreatSmartNewAgent(newAgent) {
    console.log('handleCreatSmartNewAgent-App');
    newAgent.id = this.state.requests.length + 1;
    this.setState({
      requests: [...this.state.requests, newAgent],
    });
    toast.success('New Smart Agent added');

    // will trigger the smart agent notification system
    this.setState({ executeSAgent: true });
  }

  handleSearch = searchResults => {
    this.setState({ searchResults: searchResults });
  };

  executeSmartAgents(smartAgents, allUsers, ads) {
    smartAgents.forEach(sAgent => {
      console.log('sAgent', sAgent);

      const smartAgentAds = ads.filter(ad => {
        // find the living-area name by the living-area id
        const currentLivingAreaName = dataLivingAreas.find(
          lArea => lArea.livingAreaId === ad.livingAreaId
        )?.livingAreaName;

        return (
          sAgent.CategoryId === ad.CategoryId &&
          sAgent.SubCategoryId === ad.SubCategoryId &&
          sAgent.conditionId.toLowerCase() === ad.Condition.toLowerCase() &&
          sAgent.livingAreaId.toLowerCase() ===
            currentLivingAreaName.toLowerCase()
        );
      });

      console.log('smartAgentAds', smartAgentAds);

      smartAgentAds.forEach(ad => {
        const userObject = allUsers.find(user => user.id === ad.userId);
        if (userObject) {
          const userEmail = userObject.email;

          if (userEmail) {
            console.log('send email to ' + userEmail);
          }
        }
      });
    });
  }

  render() {
    const { activeUser, allUsers, ads, searchResults, requests } = this.state;

    return (
      <  >
        <ToastContainer autoClose={3000} />
        <AdNavbar
          ads={ads}
          allUsers={allUsers}
          handleLogout={this.handleLogout}
          activeUser={activeUser}
          onSearch={this.handleSearch}
          searchResults={searchResults}
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
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              onSearch={this.handleSearch}
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
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
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
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
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
              onSearch={this.handleSearch}
            />
          </Route>

          <Route path="/search-results">
            <SearchResults
              activeUser={activeUser}
              searchResults={searchResults}
              ads={ads}
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              handleCreatNewAd={this.handleCreatNewAd}
              handleCreatSmartNewAgent={this.handleCreatSmartNewAgent}
              searchResults={searchResults}
            />
          </Route>

          <Route exact path="/maps">
            <Maps
              handleLogin={this.handleLogin}
              allUsers={allUsers}
              handleLogout={this.handleLogout}
              activeUser={activeUser}
              ads={ads}
            />
          </Route>

          <Route exact path="/zoomInAd">
            <ZoomInAd
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
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
