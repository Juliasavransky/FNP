import React, { Component } from 'react';
import { Card, CardColumns, Col, Row, Container } from 'react-bootstrap';
import AdCard from '../AdCard/AdCard';

class ZoomInAd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ad } = this.props;
    return (
      <Container className="d-flex ">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded  m-2"
          style={{ width: '26rem' }}
        >
          <Card.Title className=" m-2">{ad.Category}</Card.Title>

          <Card.Text className="m-2">Details: {ad.Details}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text>Condition: {ad.Condition} </Card.Text>

          <Card.Img variant="bottom" src={ad.img} />
          <small className=" m-2 text-muted">Published Date {ad.Date}</small>
        </Card>
      </Container>
    );
  }
}

export default ZoomInAd;
