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
                    <a href={'/#product/'+ad.id} target="_blank">
              <Card.Img variant="top"  src={ad.img} />
            </a>
                        <Card.Body>
                            <Card.Title>{ad.Category}</Card.Title>
                            <Card.Link href={"#/product/" + ad.id}>
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


