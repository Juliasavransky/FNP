import React, { Component } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchResults extends Component {
  render() {
    return (
      <Container>
        <CardColumns>{this.props.searchResults}</CardColumns>
      </Container>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;
