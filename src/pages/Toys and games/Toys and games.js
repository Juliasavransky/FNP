import React, { Component } from 'react';
import { ListGroup, Row, Col} from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'



class ToysAndGames extends Component {
    render() {

        const { ads } = this.props;
        const ToysAndGamesPage = 2
        const ToysAndGamesAds = ads.filter(ad => ad.CategoryId === ToysAndGamesPage)

        const clothingAdsUi = ToysAndGamesAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)
        return (
            <div>
                
                <ListGroup variant="flush">
                <Row>{clothingAdsUi}</Row> 
                </ListGroup>
            </div>
        );
    }
}

export default ToysAndGames;

