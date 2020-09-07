import React, { Component } from 'react';
import Login from '../../pages/Login/Login';
import {
  Form,
  Button,
  Modal,
  Container,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import emailjs from 'emailjs-com';

class NewAdModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewAdModal: false,
      CategoryId: null,
      SubCategoryId: null,
      Condition: null,
      Details:'',
      imgInput: null,
      filteredAds: [],
    };

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleCreatAd = this.handleCreatAd.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleCloseAndClean = this.handleCloseAndClean.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleModalClose() {
    this.setState({
      showNewAdModal: false,
    });
  }

  handleFileChange(event) {
    if (event.target.files[0]) {
      this.setState({
        imgInput: event.target.files[0],
      });
    } else {
      this.setState({
        imgInput: null,
      });
    }
  }

  handleCreatAd(event) {
    const {
      condition,
      imgInput,
      Details,
      CategoryId,
      SubCategoryId,
    } = this.state;

    const { handleCreatNewAd, activeUser, ads, allUsers } = this.props;

    const newAd = {
      CategoryId: CategoryId,
      SubCategoryId: SubCategoryId,
      img: imgInput ? URL.createObjectURL(imgInput) : null,
      Details: Details,
      condition: condition,
      userId: activeUser.id,
      //  ? (<Login/>):null,
    };

    console.log('handleCreatNewAd', this.props.handleCreatNewAd);
    console.log('props', this.props);

    this.props.handleCreatNewAd(newAd);

    //  send an email

    const template_params = {
      to_email: activeUser.email,
      ad_name: CategoryId,
      subcatgory_name: SubCategoryId,
      fname: activeUser.fname,
      lname: activeUser.lname,
      ad_desc: Details,
    };
   
    const service_id = 'default_service';
    const template_id = 'new_ad';
    emailjs
      .send(service_id, template_id, template_params)
      .then(alert('Email Has Been Sent Succesfully To The User'))
      .catch('The Email send Has Been failed');

    this.handleCloseAndClean();
  }



  handleCloseAndClean = () => {
    this.setState({
      CategoryId: null,
      SubCategoryId: null,
      Condition: null,
      Details:"",
      imgInput: null,
      showNewAdModal: false,
    });
  };

  render() {
    const { showNewAdModal, imgInput, Details } = this.state;

    const { ads } = this.props;

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

    const imgURL = imgInput ? URL.createObjectURL(imgInput) : '';

    return (
      <Container>
        <Button
          variant="primary"
          onClick={() => this.setState({ showNewAdModal: true })}
        >
          Place an Ad
        </Button>
        <Modal
          size="lg justify-content-center"
          show={showNewAdModal}
          onHide={this.handleModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Ad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className=" d-flex justify-content-center w-50 p-5">
              <Form className=" p-2">
                <Form.Group>
                  <Form.Control
                    style={{ width: '22rem' }}
                    onSubmit={this.handleInputChange}
                    //onChange={this.categoryChange}
                    value={this.state.CategoryId}
                    as="select"
                    name="CategoryId"
                  >
                    <option name="categoryOptions" value="0">
                      Select a Category...
                    </option>
                    {categoryOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="inlineFormCustomSelectPref"></Form.Label>
                  <Form.Control
                    style={{ width: '22rem' }}
                    value={this.state.SubCategoryId}
                    //onChange={this.subCategoryChange}
                    onChange={this.handleInputChange}
                    as="select"
                    name="SubCategoryId"
                  >
                    <option value="0">Select a Sub-Category...</option>
                    {subCategoryOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="inlineFormCustomSelectPref"></Form.Label>
                  <Form.Control
                    style={{ width: '22rem' }}
                    //onChange={this.conditionChange}
                    onChange={this.handleInputChange}
                    value={this.state.condition}
                    as="select"
                    name="condition"
                  >
                    <option value="0">Select Item Condition...</option>
                    {conditionOptions}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="Details">
                  <Form.Label> Ad Details</Form.Label>
                  <Form.Control
                    style={{ width: '22rem' }}
                    value={Details}
                    //onChange={this.DetailsInputChange}
                    onChange={this.handleInputChange}
                    type="text"
                    name="Details"
                    placeholder=" Details...."
                  />
                </Form.Group>

                <Form.Group as={Row} controlId="img">
                  <Form.Label column sm={2}>
                    Img
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      style={{ width: '22rem' }}
                      onChange={this.handleFileChange}
                      type="file"
                      accept="image/*"
                    />
                  </Col>
                </Form.Group>
                <Image size="sm" src={imgURL} className="preview"></Image>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseAndClean}>
              Cancel
            </Button>

            <Button variant="primary" onClick={this.handleCreatAd}>
              Creat A New Ad
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default NewAdModal;
