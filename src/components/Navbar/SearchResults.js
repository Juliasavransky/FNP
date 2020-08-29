import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchResults extends Component {
  render() {
    return (
      <Container>
        <Row>{this.props.searchResults}</Row>
      </Container>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;
