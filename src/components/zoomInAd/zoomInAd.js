import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'


class ZoomInAd extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { ads, ad } = this.props;
        // const { ad } = this.props;
        console.log(this.props);

        const Zoompage = ads.ad
        const zoomInAds = ads.filter(ad => ad.id === AdCard)

        const zoomInAdsUi = zoomInAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)



        return (

            <Card>
                <Card style={{ width: '28rem' }} />
                <Card.Img variant="top" src={ad.img} />
                <Card.Body>
                    <Card.Title>{ad.Category}</Card.Title>
                    <Card.Text> Details: {ad.Details}</Card.Text>

                    <Card.Text>Condition: {ad.Condition} </Card.Text>

                    <small className="text-muted">Published Date {ad.Date}</small>

                </Card.Body>
            </Card>

        );
    }
}

export default ZoomInAd;