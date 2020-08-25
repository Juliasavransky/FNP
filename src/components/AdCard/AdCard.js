import React, { Component } from 'react';
import {  Card, CardColumns, Col } from 'react-bootstrap';


class AdCard extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {

        const {ad}= this.props;
       
        
        return (
            <div>
                
                    <Card>
                        <Card.Img variant="top" href="#/zoomInAd" src={ad.img} />
                        <Card.Body>
                            <Card.Title>{ad.Category}</Card.Title>
                            <Card.Link  href="#/zoomInAd" >
                                 Details: {ad.Details}</Card.Link>
                           
                            <Card.Text>Condition: {ad.Condition} </Card.Text>
                            
                               <small className="text-muted">Published Date {ad.Date}</small>
                            
                        </Card.Body>
                    </Card>
                    
                    
            </div>
        );
    }
}

export default AdCard;


