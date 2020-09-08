import React, { Component } from 'react';
import { Form, Button, Modal, Container, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './RequestForItem.css';


class RequestForItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewAgentModal: false,
      categorySelectedId: null,
      subCategorySelectedId: null,
      conditionSelected: null,
      livingAreaIdSelected: null,
      titleInput: '',
      detailsInput: '',
      filteredAgents: [],
      sendEmail: null,
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.cleanAndHideModalData = this.cleanAndHideModalData.bind(this);
    this.handleCreatSmartAgent = this.handleCreatSmartAgent.bind(this);
  }

  componentDidMount() {
    console.log('RequestForItem', this.props);
  }
  handleModalClose() {
    this.setState({
      showNewAgentModal: false,
    });
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  cleanAndHideModalData() {
    this.setState({
      categorySelectedId: null,
      subCategorySelectedId: null,
      conditionSelected: null,
      detailsInput: '',
      livingAreaIdSelected: null,
      showNewAgentModal: false,
      titleInput: '',
    });
  }

  handleCreatSmartAgent(event) {
    const {
      livingAreaIdSelected,
      conditionSelected,
      detailsInput,
      categorySelectedId,
      subCategorySelectedId,
      categoryName,
      subCategoryName,
      imgInput,
      Condition,
      titleInput,
    } = this.state;

    const {
      activeUser,
      ads,
      allUsers,
      smartAgent,
      handleCreatSmartNewAgent,
      requests,
    } = this.props;

    const newAgent = {
      CategoryId: categorySelectedId,
      SubCategoryId: subCategorySelectedId,
      Details: detailsInput,
      conditionId: conditionSelected,
      userId: activeUser.id,
      livingAreaId: livingAreaIdSelected,
      title: titleInput,
    };
    //console.log("handleCreatSmartAgent", this.props.handleCreatSmartAgent)
    //console.log("props", this.props)

    handleCreatSmartNewAgent(newAgent);
    this.cleanAndHideModalData();

    //  send an email

    const template_params = {
      to_email: this.props.activeUser.email,
      ad_name: 'ad_name_value',
      fname: 'fname_value',
      lname: 'lname_value',
      ad_desc: 'ad_desc_value',
    };

    const service_id = 'default_service';
    const template_id = 'new_ad';
    emailjs
      .send(service_id, template_id, template_params)
      .then(alert('Email Has Been Sent Succesfully To The User'))
      .catch('The Email send Has Been failed');
  }
  categoryChange = event => {
    console.log(event.target.value, event.target.name);
    this.setState({
      categorySelectedId: parseInt(event.target.value),
    });
  };
  subCategoryChange = event => {
    this.setState({
      subCategorySelectedId: parseInt(event.target.value),
    });
  };
  conditionChange = event => {
    this.setState({
      conditionSelected: parseInt(event.target.value),
    });
  };
  livingAreaChange = event => {
    this.setState({
      livingAreaIdSelected: parseInt(event.target.value),
    });
  };
  sendEmailChange = event => {
    this.setState({
      sendEmail: event.target.Check,
    });
  };

  render() {
    const {
      showNewAgentModal,
      categorySelectedId,
      sendEmail,
      subCategorySelectedId,
      conditionSelected,
      filteredAgents,
      detailsInput,
      titleInput,
      livingAreaIdSelected,
    } = this.state;

    const {
      activeUser,
      ads,
      allUsers,
      handleCreatSmartAgent,
      ad,
      requests,
    } = this.props;
    console.log('ads', ads);
    // a function that filters ads with the same category
    const filterUniqueCategories = () => {
      let categoryIdsFound = [];
      let uniqueCategoryAds = [];

      ads.forEach(ad => {
        if (!categoryIdsFound.includes(ad.CategoryId)) {
          categoryIdsFound.push(parseInt(ad.CategoryId));
          uniqueCategoryAds.push(ad);
        }
      });

      return uniqueCategoryAds;
    };
    const categoryOptions = filterUniqueCategories().map(ad => (
      <option key={ad.id} value={ad.CategoryId}>
        {ad.categoryName}
      </option>
    ));

    // a function that filters ads with the same subcategory
    const filterUniqueSubCategories = () => {
      let subCategoryIdsFound = [];
      let uniqueSubCategoryAds = [];

      ads.forEach(ad => {
        if (!subCategoryIdsFound.includes(ad.SubCategoryId)) {
          subCategoryIdsFound.push(parseInt(ad.SubCategoryId));
          uniqueSubCategoryAds.push(ad);
        }
      });

      return uniqueSubCategoryAds;
    };

    const subCategoryOptions = filterUniqueSubCategories().map(ad => {
      const subOp = [];

      if (ad.CategoryId === this.state.categorySelectedId) {
        if (!subOp.includes(ad.subCategoryName)) {
          subOp.push(ad.subCategoryName);
          return (
            <option key={ad.id} value={ad.SubCategoryId}>
              {ad.subCategoryName}
            </option>
          );
        }
      }
    });

    // a function that filters ads with the same Condition
    const filterUniqueCondition = () => {
      let conditionIdFound = [];
      let conditionAds = [];

      ads.forEach(ad => {
        if (!conditionIdFound.includes(ad.conditionId)) {
          conditionIdFound.push(parseInt(ad.conditionId));
          conditionAds.push(ad);
        }
      });

      return conditionAds;
    };
    const conditionOptions = filterUniqueCondition().map(ad => (
      <option key={ad.id} value={ad.conditionIdFound}>
        {ad.Condition}
      </option>
    ));

    // a function that filters ads with the same living Area
    const filterUniquelivingArea = () => {
      let livingAreaIdFound = [];
      let livingAreaIdUsers = [];

      allUsers &&
        allUsers.forEach(user => {
          if (!livingAreaIdFound.includes(user.livingAreaId)) {
            livingAreaIdFound.push(parseInt(user.livingAreaId));
            livingAreaIdUsers.push(user);
          }
        });

      return livingAreaIdUsers;
    };
    const livingAreaOptions = filterUniquelivingArea().map(user => (
      <option key={user.id} value={user.livingAreaIdFound}>
        {user.livingArea}
      </option>
    ));

    return (
      <Container>
        <Button 
        className="btnLookingFor"
          variant="link"
          onClick={() => this.setState({ showNewAgentModal: true })}
        >
          I'm Looking for An Item
        </Button>
        <Modal
          size="lg justify-content-center"
          show={showNewAgentModal}
          onHide={this.handleModalClose}
        >
          <Modal.Header 
          className="mheader"
          closeButton>
            <Modal.Title> Creat A New Agent</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalAgent">
            <Container className=" d-flex justify-content-center w-50 p-5">
              <Form>
                <Form.Group>
                  <Form.Control
                    style={{ width: '22rem' }}
                    onSubmit={this.handleInputChange}
                    onChange={this.categoryChange}
                    value={this.state.categorySelectedId}
                    as="select"
                    name="categorySelectedId"
                    className="justify-content-center "
                  >
                    <option name="categoryOptions" value="0">
                      Select a Category
                    </option>
                    {categoryOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    style={{ width: '22rem' }}
                    value={this.state.subCategorySelectedId}
                    onChange={this.handleInputChange}
                    onChange={this.subCategoryChange}
                    as="select"
                    className="justify-content-center"
                    name="subCategorySelectedId"
                  >
                    <option value="0">Select A Sub-Category</option>
                    {subCategoryOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    style={{ width: '22rem' }}
                    onChange={this.conditionChange}
                    onChange={this.handleInputChange}
                    value={this.state.conditionSelected}
                    as="select"
                    className="justify-content-center"
                    name="conditionSelected"
                  >
                    <option value="0">Select Item Condition</option>
                    {conditionOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    style={{ width: '22rem' }}
                    onChange={this.livingAreaChange}
                    onChange={this.handleInputChange}
                    value={this.state.livingAreaIdSelected}
                    as="select"
                    className="justify-content-center"
                    name="livingAreaIdSelected"
                  >
                    <option value="0">Select Item Location</option>
                    {livingAreaOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Control
                    style={{ width: '22rem' }}
                    value={titleInput}
                    onChange={this.handleInputChange}
                    type="text"
                    name="titleInput"
                    placeholder="Ad Title..."
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group controlId="Details">
                      <Form.Control
                        as="textarea"
                        style={{ width: '22rem' }}
                        rows="2"
                        value={detailsInput}
                        onChange={this.handleInputChange}
                        type="text"
                        name="detailsInput"
                        placeholder="Ad Details..."
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Check
                        onChange={this.handleInputChange}
                        onChange={this.sendEmailChange}
                        type="checkbox"
                        label="Send Me Email Alerts"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer className="mfooter">
            <Button variant="link" onClick={this.cleanAndHideModalData}>
              Cancel
            </Button>

            <Button variant="link" onClick={this.handleCreatSmartAgent}>
              Creat A New Agent
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default RequestForItem;
