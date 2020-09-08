import PropTypes from "prop-types";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FacebookIcon, FacebookShareButton } from "react-share";
// import { Link } from "react-router-dom";
import jsonUsers from "../../data/users.json";
import './AdCard.css';



class AdCard extends Component {
  render() {
    const { ad } = this.props;
    const owner = jsonUsers.find(
      (user) => this.props.ad.userId === user.id
    );
    console.log("we wanna see owner"+ owner.StreetNumber)
    const redirectPath = `https://www.google.com/maps/place/${owner.StreetNumber + " " + owner.City}`;
   
    return (
      <Card
       className=" shadow card p-3   card text-center ">
        <a href={"/#product/" + ad.id}>
          <Card.Img 
          className="cardImg"
          variant="top" src={ad.img} />
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
          <br />
          <a className="map" href={redirectPath} target="_blank">
           See The Address On The Map</a>
        
          <br /> <br />
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
