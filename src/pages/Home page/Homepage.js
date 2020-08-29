import React, { Component } from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
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
      <Col key={ad.id} lg={3} md={4} sm={6}>
        <AdCard ad={ad} />
      </Col>
    ));

    return (
      <div className="p-homepage">
        <Container>
        
         
          <p className= "par">
            <br></br>
            
          Got stuff you don't need For mothers and/or babies? <br></br>
           We'll find someone to come and take it. <br></br>
           Looking for something? We'll pair you with someone giving it away. <br></br>
            All completely free.  
          </p>

          <Row>{allAds}</Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
