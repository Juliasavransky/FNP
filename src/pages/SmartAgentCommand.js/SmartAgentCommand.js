// import React, { Component } from "react";
// import {
//     CardColumns,
//     Container,
//     Card,
//     Row,
//     Col,
//     Dropdown,
//   } from 'react-bootstrap';

// class SmartAgentCommand extends Component {

//     constructor(props) {
//         super(props);

//     const {
//         activeUser,
//         ads,
//         allUsers,
//         requests,
//         handleCreatNewAd,
//         handleCreatSmartNewAgent,
//       } = this.props;

//     }

//   render() {
//     return (
//       <div>
//         <Container>
//           <Dropdown>
//             <br />
//             <h2>My Smart Agents</h2>
//             <br />
//             <Dropdown.Toggle variant="info" id="dropdown-basic">
//               Stuff I'm Looking For
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">Info And Notifications</Dropdown.Item>
//               <Dropdown.Item href="#/action-2"> My Smart Agent</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Bounce My Ad</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <CardColumns>
//             <Card className="shadow item well p-3 mb-5" key={sAgent.agentId}>
//               <Card.Body>
//                 <Card.Title className="card text-center bg-white rounded">
//                   {" "}
//                   {sAgent.title}{" "}
//                 </Card.Title>
//                 <Card.Text className="card text-center">
//                   <Card.Text>Category: {categoryName}</Card.Text>
//                   <Card.Text>Sub-Category: {subCategoryName}</Card.Text>
//                   <Card.Text>Condition: {sAgent.conditionId}</Card.Text>
//                   <Card.Text>Living-Area: {sAgent.livingAreaId}</Card.Text>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </CardColumns>
//         </Container>
        
//       </div>
//     );
//   }
// }

// export default SmartAgentCommand;
