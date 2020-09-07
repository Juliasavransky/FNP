import PropTypes from "prop-types";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Link } from 'react-router-dom';

class AdCard extends Component {
  render() {
    const { ad } = this.props;
   

    return (
      <Card className=" shadow item well p-3 mb-5 bg-white rounded card text-center ">
        <a href={"/#product/" + ad.id}>
          <Card.Img variant="top" src={ad.img} />
        </a>

        <Card.Body>
          <Card.Title>{ad.Category}</Card.Title>
          <Card.Link href={"#/product/" + ad.id}>
            Details- {ad.Details}
          </Card.Link>
          <Card.Text>Condition- {ad.Condition} </Card.Text>
          <small className="text-muted card text-center">
            Published Date {ad.Date}
          </small>
          <br/>
          <Link to = ''><button>See The address on the map</button></Link>
          {/* <iframe
 width="600"
 height="450"
 frameborder="0" 
 src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBGwuk78nvE8sbBxd8xt-tPL1mT1DiwZCY&q=" + 
 owner.StreetNumber + " " + owner.City } allowfullscreen>
</iframe> */}
          <br/> <br/>
          
          <FacebookShareButton url="https://www.facebook.com/">
            <FacebookIcon size={32} round={true} />
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
