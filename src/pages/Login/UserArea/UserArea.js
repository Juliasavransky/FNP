<<<<<<< HEAD
import React, { Component } from "react";
import { CardColumns, Container, Card, Row, Col, Dropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AdCard from "../../../components/AdCard/AdCard";
import NewAdModal from "../../../components/New Ad Modal/NewAdModal";
=======
import React, { Component } from 'react';
import {
  CardColumns,
  Container,
  Card,
  Row,
  Col,
  Dropdown,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AdCard from '../../../components/AdCard/AdCard';
import NewAdModal from '../../../components/New Ad Modal/NewAdModal';
>>>>>>> e564fb4b7b4a1c1cf4e5fb9cd269ae6ac029ef45
import {
  dataCategoriess as categories,
  dataSubCategorys as subCategories,
} from '../../../data/ddData';

class UserArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSmartAgents: [],
    };
  }

  componentDidMount() {
    // Get all the existing smart agents - we don't want to display it to the logged-in user
    console.log('all smart agents', this.props.requests);

    //לבדוק האם מבטל רידייקט // Filter only the smart agents belongs to the logged in user - this is what we want to display
    if (this.props.activeUser) {
      this.setState({
        userSmartAgents: this.props.requests.filter(
          sAgent => sAgent.userId === this.props.activeUser.id
        ),
      });
    }
  }

  componentDidUpdate() {
    if (!this.props.activeUser) {
      this.setState({ ...this.setState, redirectToHome: true });
    }
    console.log('only logged-in user smart agents', this.state.userSmartAgents);
  }

  render() {
    const {
      activeUser,
      ads,
      allUsers,
      requests,
      handleCreatNewAd,
      handleCreatSmartNewAgent,
    } = this.props;

    const { userSmartAgents, redirectToHome } = this.state;

    const activeUserAds =
      activeUser &&
      ads.filter(ad => {
        return ad.userId === activeUser.id;
      });

    const activeUserAdsUi =
      activeUser && activeUserAds.map(ad => <AdCard key={ad.id} ad={ad} />);

 
    return (
      <div>
        {redirectToHome ? (
          <Redirect to="/#" />
        ) : (
          <Container>
            {userSmartAgents.length > 0 &&
              userSmartAgents.map(sAgent => {
                const categoryName = categories.find(
                  cateogry => cateogry.categoryId === sAgent.CategoryId
                ).categoryName;

                const subCategoryName = subCategories.find(
                  subCategory =>
                    subCategory.subCategoryId === sAgent.SubCategoryId
                ).subCategoryName;

                return (
                  <Container>
                    <Dropdown>
                      <br />
                      <h2>My Smart Agents</h2>
                      <br />
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Stuff I'm Looking For
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <CardColumns>
                      <Card
                        className="shadow item well p-3 mb-5"
                        key={sAgent.agentId}
                      >
                        <Card.Body>
                          <Card.Title className="card text-center bg-white rounded">
                            {' '}
                            {sAgent.title}{' '}
                          </Card.Title>
                          <Card.Text className="card text-center">
                            <Card.Text>Category: {categoryName}</Card.Text>
                            <Card.Text>
                              Sub-Category: {subCategoryName}
                            </Card.Text>
                            <Card.Text>
                              Condition: {sAgent.conditionId}
                            </Card.Text>
                            <Card.Text>
                              Living-Area: {sAgent.livingAreaId}
                            </Card.Text>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardColumns>
                  </Container>
                );
              })}
            <br />
            {/* <CardColumns>{activeUserAgentsUi}</CardColumns> */}
            ); })}
            <CardColumns>{activeUserAdsUi}</CardColumns>
          </Container>
        )}
        <NewAdModal
          ads={ads}
          handleLogin={this.props.handleLogin}
          allUsers={allUsers}
          handleLogout={this.props.handleLogout}
          handleCreatNewAd={this.props.handleCreatNewAd}
          handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          activeUser={activeUser}
        />
      </div>
    );
  }
}

export default UserArea;
