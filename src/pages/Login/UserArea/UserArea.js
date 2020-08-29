import React, { Component } from 'react';
import { ListGroup, Col, Row, Form, Button, Modal, Container } from 'react-bootstrap';
import AdCard from '../../../components/AdCard/AdCard'
import NewAdModal from '../../../components/New Ad Modal/NewAdModal';



class UserArea extends Component {
    constructor(props) {
        super(props);
      

    }

  

    render() {
        const { activeUser, ads, allUsers, handleCreatNewAd } = this.props;

        // const ads = userId
        // const activeUser = allUsers.id
        const activeUserAds = ads.filter(ad => ad.userId === allUsers.id)

        const activeUserAdsUi = activeUserAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div>
                <Container>
                my ads/active/pause/delete<br />
                my smart agent<br />
               creat new ad<br />

                my meseges
                <Row>{activeUserAdsUi}</Row>
                </Container>
                <NewAdModal 
                ads={ads}
                handleLogin={this.handleLogin}
                allUsers={allUsers}
                handleLogout={this.handleLogout}
                handleCreatNewAd={this.handleCreatNewAd}
                activeUser={activeUser}/>
            </div>
        );
    }
}

export default UserArea;