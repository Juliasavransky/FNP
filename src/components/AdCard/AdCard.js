import React, { Component } from 'react';
import { Card, CardColumns, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AdCard extends Component {
  render() {
    const { ad } = this.props;

    return (
      <div className="item well" >
        <Card className="shadow  p-3 mb-5 bg-white rounded card text-center">
          <a href={'/#product/' + ad.id} >
            <Card.Img variant="top" src={ad.img} />
          </a>
          <Card.Body>
            <Card.Title>{ad.Category}</Card.Title>
            <Card.Link href={'#/product/' + ad.id}>
              Details: {ad.Details}
            </Card.Link>

            <Card.Text>Condition: {ad.Condition}{' '} </Card.Text>

            <small className="text-muted">Published Date {ad.Date}</small>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

AdCard.propTypes = {
  ad: PropTypes.object.isRequired,
};

export default AdCard;
