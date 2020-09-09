import React, { Component } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RequestForItem from '../Request for item/RequestForItem';
import './SearchResults.css';


class SearchResults extends Component {
  
  render() {
    return (
      <>
        {this.props.searchResults.length === 0 ? (
          <div className="SearchResults">
            <h2 className="noResults">No Results Found :-(</h2>
           

           <p className="oursmart">Sorry, the item you are interested in is not currently on the site.
             Our smart agent scans the site for you even when you are not on it,
            
            and finds for you the ads you are looking for according to
            predefined criteria. 
            How Is This Working? 
            First click on Add New Agent and define the criteria of the ads you
            are looking for.</p>
            <p className="asSoon">As soon as you fill in the details, 
            the smart agent will wait for new ads to be added to the site,
            which meet the criteria you have set for him. 
            The search results can be obtained by your email. </p>
  
            {this.props.activeUser ? (
              <RequestForItem
                ads={this.props.ads}
                handleLogin={this.props.handleLogin}
                allUsers={this.props.allUsers}
                handleLogout={this.props.handleLogout}
                activeUser={this.props.activeUser}
                handleCreatNewAd={this.props.handleCreatNewAd}
                handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
              />
            ) : (
              
              <Link className="registered" to="/Login">Registered Users Login</Link>
            )}
          </div>
        ) : (
          <CardColumns>{this.props.searchResults}</CardColumns>
        )}
      </>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchResults;
