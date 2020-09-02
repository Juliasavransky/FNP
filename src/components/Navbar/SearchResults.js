import React, { Component } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  render() {
    return (
      <Container>
        {this.props.searchResults.length === 0 ? (
          <div>
            <h2>No results found :-(</h2>
            Sorry, the item you are interested in is not currently on the site.{' '}
            <br></br>
            The smart agent scans the site for you even when you are not on it,{' '}
            <br></br>
            and finds for you the ads you are looking for according to
            predefined criteria. <br></br>
            How is this working? <br></br> <br></br>
            First click on Add New Agent and define the criteria of the ads you
            are looking for.<br></br>
            As soon as you fill in the details, <br></br>
            the smart agent will wait for new ads to be added to the site, which
            meet the criteria you have set for him. <br></br>
            The search results can be obtained by your email. <br></br>{' '}
            <br></br>
            {this.props.activeUser ? (
              <Link to="/SmartAgent">Try Smart Agent</Link>
            ) : (
              <Link to="/Login">Please sign-in</Link>
            )}
          </div>
        ) : (
          <CardColumns>{this.props.searchResults}</CardColumns>
        )}
      </Container>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;
