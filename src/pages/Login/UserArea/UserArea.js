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
import {
  dataCategoriess as categories,
  dataSubCategorys as subCategories,
} from '../../../data/ddData';
// import SmartAgentCommand from '../../SmartAgentCommand.js';
import './UserArea.css';
import RequestForItem from '../../../components/Request for item/RequestForItem';


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
// const mySmartAgentUi= userSmartAgents.map(sAgent => )
 
    return (
      <div className="userArea">
                    <CardColumns>{activeUserAdsUi}</CardColumns>
                    <NewAdModal
          ads={ads}
          handleLogin={this.props.handleLogin}
          allUsers={allUsers}
          handleLogout={this.props.handleLogout}
          handleCreatNewAd={this.props.handleCreatNewAd}
          handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          activeUser={activeUser}
        />
        <RequestForItem
          ads={ads}
          handleLogin={this.props.handleLogin}
          allUsers={allUsers}
          handleLogout={this.props.handleLogout}
          handleCreatNewAd={this.props.handleCreatNewAd}
          handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          activeUser={activeUser}
        />

        {redirectToHome ? (
          <Redirect to="#/" />
        ) : (
          <Container >
            <h2 className="title text-center" >My Smart Agents</h2>
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
                 

                    <CardColumns>
                      
                      <Card 
                        className="shadow  p-3 mb-5"
                        key={sAgent.agentId}
                      >
                        <Card.Body>
                          <Card.Title className=" cardTitle card text-center bg-white rounded">
                            {' '}
                            {sAgent.title}{' '}
                          </Card.Title>
                          <Card.Text className=" cardBoby text-center">
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
          </Container>
        )}
   
          {/* <SmartAgentCommand
          ads={ads}
          handleLogin={this.props.handleLogin}
          allUsers={allUsers}
          handleLogout={this.props.handleLogout}
          handleCreatNewAd={this.props.handleCreatNewAd}
          handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          activeUser={activeUser} */}
        

        {/* /> */}
      </div>
    );
  }
}

export default UserArea;


