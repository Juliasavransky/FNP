import React, { Component } from "react";

class SmartAgentCommand extends Component {

  render() {
    return (
      <div>
        <Container>
          <Dropdown>
            <br />
            <h2>My Smart Agents</h2>
            <br />
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Stuff I'm Looking For
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Info And Notifications</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> My Smart Agent</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bounce My Ad</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <CardColumns>
            <Card className="shadow item well p-3 mb-5" key={sAgent.agentId}>
              <Card.Body>
                <Card.Title className="card text-center bg-white rounded">
                  {" "}
                  {sAgent.title}{" "}
                </Card.Title>
                <Card.Text className="card text-center">
                  <Card.Text>Category: {categoryName}</Card.Text>
                  <Card.Text>Sub-Category: {subCategoryName}</Card.Text>
                  <Card.Text>Condition: {sAgent.conditionId}</Card.Text>
                  <Card.Text>Living-Area: {sAgent.livingAreaId}</Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Container>
        ads={ads}
          handleLogin={this.props.handleLogin}
          allUsers={allUsers}
          handleLogout={this.props.handleLogout}
          handleCreatNewAd={this.props.handleCreatNewAd}
          handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
          activeUser={activeUser}
      </div>
    );
  }
}

export default SmartAgentCommand;
