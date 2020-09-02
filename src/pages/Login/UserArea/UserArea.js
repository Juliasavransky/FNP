import React, { Component } from 'react';
import { ListGroup, Col, Row, Form, Button, Modal, Container,CardColumns } from 'react-bootstrap';
import AdCard from '../../../components/AdCard/AdCard'
import NewAdModal from '../../../components/New Ad Modal/NewAdModal';




class UserArea extends Component {
    constructor(props) {
        super(props);
      

    }

  

    render() {
        const { activeUser, ads, allUsers, handleCreatNewAd } = this.props;
     
        const activeUserAds = activeUser && ads.filter((ad)=> {
            return ad.userId === activeUser.id
        })
        
        const activeUserAdsUi = activeUser && activeUserAds.map(ad =>  <AdCard key={ad.id} ad={ad} />)
        
        return (

            <div>
                <Container>
                my smart agent<br />
                my meseges
                <CardColumns>{activeUserAdsUi}</CardColumns>
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