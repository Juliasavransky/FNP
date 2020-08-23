import React, { Component } from 'react'; import './App.css';
import Homepage from './pages/Home page/Homepage';
import SmartAgent from './pages/Smart agent/SmartAgent';
import { Switch, Route, HashRouter } from 'react-router-dom';
import AdNavbar from '../src/components/Navbar/AdNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clothing from '../src/pages/Clothing/Clothing';
import ToysAndGames from '../src/pages/Toys and games/Toys and games'
import ForTheBabys from '../src/pages/For the babys/For the babys'
import ForMoms from '../src/pages/For Moms/For Moms'
import jsonUsers from '../src/data/users.json';
import jsonAds from '../src/data/Ads.json';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Furniture from './pages/For the babys/furniture'
import Safety from './pages/For the babys/safety'
import Carriage from './pages/For the babys/carriage'
import CoatsAndJackets from './pages/Clothing/Coats and Jackets'
import ClothingOther from './pages/Clothing/ClothingOther'
import Shoes from './pages/Clothing/Shoes'
import SpecialEvents from './pages/Clothing/SpecialEvents'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeUser: null,
      allUsers: jsonUsers,
      ads: jsonAds,

    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlesignup = this.handlesignup.bind(this);



  }

  handleLogout() {
    this.setState({
      activeUser: null
    })
  }

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }

  handlesignup(neweUser) {
    this.setState({
      neweUser: neweUser
    })

    console.log(this.neweUser);
  }

  render() {
    const { activeUser, allUsers, ads } = this.state;
    return (

      <div className="App">
        <HashRouter>
          <AdNavbar ads={ads} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />

          <Switch>
            <Route exact path="/">
              <Homepage ads={ads} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/CoatsAndJackets">
              <CoatsAndJackets ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/ClothingOther">
              <ClothingOther ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/Shoes">
              <Shoes ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/SpecialEvents">
              <SpecialEvents ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            <Route exact path="/ToysAndGames">
              <ToysAndGames ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            <Route exact path="/ForTheBabys">
              <ForTheBabys ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/furniture">
              <Furniture handleLogin={this.handleLogin} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/safety">
              <Safety handleLogin={this.handleLogin} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/carriage">
              <Carriage handleLogin={this.handleLogin} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}


            <Route exact path="/ForMoms">
              <ForMoms ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            {/* <Route exact path="/Clothing">
              <Clothing ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>  */}

            <Route exact path="/SmartAgent">
              <SmartAgent ads={ads} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/signup">
              <Signup handlesignup={this.handlesignup} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>

            <Route exact path="/Login">
              <Login handleLogin={this.handleLogin} allUsers={allUsers} handleLogout={this.handleLogout} activeUser={activeUser} />
            </Route>





          </Switch>
        </HashRouter>
      </div>

    );
  }
}

export default App;
