import React, { Component } from 'react';
import { ListGroup, Col, Row, Nav, Form, Navbar } from 'react-bootstrap';
import AdCard from '../../../components/AdCard/AdCard'



class UserArea extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { activeUser, ads, allUsers} = this.props;

        // const ads = userId
        // const activeUser = allUsers.id
        const activeUserAds = ads.filter(ad => ad.userId === allUsers.id)

        const activeUserAdsUi = activeUserAds.map(ad => <Col key={ad.id} lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div>
                my ads/active/pause/delete<br/>
                my smart agent<br/>
                my meseges
                <Row>{activeUserAdsUi}</Row>
            </div>
        );
    }
}

export default UserArea;