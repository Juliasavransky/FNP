import React, { Component } from 'react';
import { ListGroup, Row , Col} from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'


class Clothing extends Component {
    render() {
        const { ads } = this.props;

        const ClothingPage = 1
        const clothingAds = ads.filter(ad => ad.CategoryId === ClothingPage)

        const clothingAdsUi = clothingAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)

        return (
            <div>
                
               <Row>{clothingAdsUi}</Row> 
               
            </div>
        );
    }
}

export default Clothing;

