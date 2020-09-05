import React, { Component } from 'react';
import { Card, } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {FacebookShareButton, FacebookIcon} from 'react-share';

class AdCard extends Component {
  render() {
    const { ad } = this.props;

    return (
      
        <Card className=" shadow item well p-3 mb-5 bg-white rounded card text-center ">
          <a href={'/#product/' + ad.id} >
            <Card.Img variant="top" src={ad.img} />
          </a>
         
          <Card.Body>
            <Card.Title>{ad.Category}</Card.Title>
            <Card.Link href={'#/product/' + ad.id}>
              Details- {ad.Details}
            </Card.Link>
             
            <Card.Text>Condition- {ad.Condition}{' '} </Card.Text>

            <small className="text-muted card text-center">Published Date {ad.Date}</small> 
            <br></br> <br></br>
            <FacebookShareButton url="https://www.facebook.com/">
              <FacebookIcon size={32} round={true}/>
              </FacebookShareButton>
          </Card.Body>
        </Card>


      
    );
  }
}

AdCard.propTypes = {
  ad: PropTypes.object.isRequired,
};

export default AdCard;
