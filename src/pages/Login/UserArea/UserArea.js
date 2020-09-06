import React, { Component } from "react";
import { CardColumns, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AdCard from "../../../components/AdCard/AdCard";
import NewAdModal from "../../../components/New Ad Modal/NewAdModal";
import {
  dataCategoriess as categories,
  dataSubCategorys as subCategories
} from "../../../data/ddData";

class UserArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSmartAgents: [],
    };
  }

  componentDidMount() {
    // Get all the existing smart agents - we don't want to display it to the logged-in user
    console.log("all smart agents", this.props.requests);


    //לבדוק האם מבטל רידייקט // Filter only the smart agents belongs to the logged in user - this is what we want to display
    if (this.props.activeUser) {
      this.setState({
        userSmartAgents: this.props.requests.filter(
          (sAgent) => sAgent.userId === this.props.activeUser.id
        ),
      });
    }

  }

  componentDidUpdate() {
    if (!this.props.activeUser) {
      this.setState({ ...this.setState, redirectToHome: true });
    }
    console.log("only logged-in user smart agents", this.state.userSmartAgents);
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
      ads.filter((ad) => {
        return ad.userId === activeUser.id;
      });

    const activeUserAdsUi =
      activeUser && activeUserAds.map((ad) => <AdCard key={ad.id} ad={ad} />);

    return (
      <div>
        {redirectToHome ? (
          <Redirect to="/#" />
        ) : (
            <Container>
              {userSmartAgents.length > 0 &&
                userSmartAgents.map((sAgent) => {
                  const categoryName = categories.find(
                    (cateogry) => cateogry.categoryId === sAgent.CategoryId
                  ).categoryName;

                  const subCategoryName = subCategories.find(
                    (subCategory) =>
                      subCategory.subCategoryId === sAgent.SubCategoryId
                  ).subCategoryName;

                  return (
                    <React.Fragment key={sAgent.agentId}>
                      <h3>{sAgent.title}</h3>
                      <ul>
                        <li>Category: {categoryName}</li>
                        <li>Sub-Category: {subCategoryName}</li>
                        <li>Condition: {sAgent.conditionId}</li>
                        <li>Living-Area: {sAgent.livingAreaId}</li>
                      </ul>
                    </React.Fragment>
                  );
                })}
                
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
