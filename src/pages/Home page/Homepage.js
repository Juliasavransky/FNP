import React, { Component } from 'react';
import { Container, CardColumns, Jumbotron, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Help from '../Footer/Footer';
import AdCard from '../../components/AdCard/AdCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeUser, handleLogout, allUsers, ads } = this.props;
    console.log(ads);

    const allAds = ads.map(ad => (


      <AdCard ad={ad} key={ad.id} />

    ));

    return (
      <div>
        <div className="img">
          <Container className="p-homepage" >
            <div className="name">
              <h1>PASS ON </h1>
              <span>All completely free</span>
            </div>

            <p className="par">
              Got stuff you don't need For mothers and/or babies? <br></br>
           We'll find someone to come and take it. <br></br>
           Looking for something? We'll pair you with someone giving it away. <br></br>
              <br></br>
            </p>

          </Container>
        </div>
        <CardColumns className="back"> {allAds}</CardColumns>
      </div>

    );
  }
}

export default HomePage;
