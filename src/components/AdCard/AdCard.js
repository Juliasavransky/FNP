import PropTypes from "prop-types";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Link } from "react-router-dom";
import jsonUsers from "../../data/users.json";


class AdCard extends Component {
  render() {
    const { ad } = this.props;
    const owner = jsonUsers.filter(
      (user) => this.props.ad.userId === user.id
    );
    console.log("we wanna see owner"+ owner.StreetNumber)
    // const redirectPath = `/maps/${owner.StreetNumber + " " + owner.City}`;
    const redirectPath = `/maps/${"Yosef Sapir 99 Hulon"}`;
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
          <br />
          {/* <Link className="map" to={redirectPath} target="blank">
           See The Address On The Map
          </Link> */}
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
