import React, { Component } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import RequestForItem from '../Request for item/RequestForItem';

class SearchResults extends Component {
  render() {
    return (
      <Container className="SearchResults">
        {this.props.searchResults.length === 0 ? (
          <div>

            <br></br><br></br>
            <h2>No Results Found :-(</h2>
            <br></br>
            Sorry, the item you are interested in is not currently on the site.{' '}
            <br></br>
            Our smart agent scans the site for you even when you are not on it,{' '}
            <br></br>
            and finds for you the ads you are looking for according to
            predefined criteria. <br></br>
            How Is This Working? <br></br> <br></br>
            First click on Add New Agent and define the criteria of the ads you
            are looking for.<br></br>
            As soon as you fill in the details, <br></br>
            the smart agent will wait for new ads to be added to the site, <br></br>
            which meet the criteria you have set for him. <br></br>
            The search results can be obtained by your email. <br></br>{' '}
            <br></br>
            {this.props.activeUser ? (
           
             <Link to="/SmartAgent">Try Smart Agent</Link>
              ) : (
              <Link to="/Login">Registered Users Login</Link>
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
