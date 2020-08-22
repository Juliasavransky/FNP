import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard'



class ForMoms extends Component {
    render() {
        const { ads } = this.props;

        const ForMomsPage = 4
        const ForMomsAds = ads.filter(ad => ad.CategoryId === ForMomsPage)

        const ForMomsAdsUi = ForMomsAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)
        return (
            <div>
                <ListGroup variant="flush">
                <Row>{ForMomsAdsUi}</Row> 
                </ListGroup>
            </div>
        );
    }
}

export default ForMoms;

