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
     
        const activeUserAds = activeUser && ads.filter((ad)=> {
            return ad.id === activeUser.id
        })
        
        const activeUserAdsUi = activeUser && activeUserAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)
        
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
                handleLogin={this.props.handleLogin}
                allUsers={allUsers}
                handleLogout={this.props.handleLogout}
                handleCreatNewAd={this.props.handleCreatNewAd}
                activeUser={activeUser}
                />
            </div>
        );
    }
}

export default UserArea;