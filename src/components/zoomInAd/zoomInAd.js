import React, { Component } from 'react';
import { Card, CardColumns, Col } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'

class ZoomInAd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ad } = this.props;
    return (
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={ad.img} />
        <Card.Body>
          <Card.Title>{ad.Category}</Card.Title>
          <Card.Text> Details: {ad.Details}</Card.Text>
          <Card.Text> Condition: {ad.Condition} </Card.Text>
          <small className="text-muted">Published Date {ad.Date}</small>
        </Card.Body>
      </Card>
    );
  }
}

export default ZoomInAd;
