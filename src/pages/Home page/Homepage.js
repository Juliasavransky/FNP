import React, { Component } from 'react';
import { Container, Button, Card, Col, Row, CardColumns, Jumbotron } from 'react-bootstrap';
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
      <Container>
        <Jumbotron fluid
          className="p-homepage"
        >
          <p className="par block-example border  ">
            Got stuff you don't need For mothers and/or babies? <br></br>
           We'll find someone to come and take it. <br></br>
           Looking for something? We'll pair you with someone giving it away. <br></br>
            All completely free.  <br></br>
          </p>
        </Jumbotron>
        <CardColumns> {allAds}</CardColumns>
      </Container>

    );
  }
}

export default HomePage;
