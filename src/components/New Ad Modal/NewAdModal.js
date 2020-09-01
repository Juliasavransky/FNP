import React, { Component } from 'react';
import { Form, Button, Modal, Container, Image, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import jsonUsers from '../../data/users.json'
import jsonAds from '../../data/Ads.json'



class NewAdModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewAdModal: false,

            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,

            DetailsInput: "",
            imgInput: null,

            filteredAds: [],



        }
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatAd = this.handleCreatAd.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

        
    }

    handleModalClose() {
        this.setState({
            showNewAdModal: false
        })
    }
    handleFileChange(event) {

        if (event.target.files[0]) {
            this.setState({
                imgInput: event.target.files[0]
            });
        } else {
            this.setState({
                imgInput: null
            });

        }
    }

    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleCreatAd(event) {
        const { categoryName, subCategoryName, imgInput, DetailsInput, Condition, } = this.state;
        const{ activeUser}= this.props
        // const { handleCreatNewAd }= this.props

        const newAd = {
            // categoryName: categorySelectedId,
            // subCategoryName: subCategorySelectedId ,
            img: URL.createObjectURL(imgInput),
            userId: activeUser,
            Details: DetailsInput,
            // Condition: conditionSelected ,

        };
        console.log("handleCreatNewAd", this.props.handleCreatNewAd)
        console.log("props", this.props)


        this.props.handleCreatNewAd(newAd);
        this.handleModalClose();

        // //  send an email
        
        //  var template_params = {
        //     "to_email": this.props.activeUser.email,
        //     "ad_name": "ad_name_value",
        //     "fname": "fname_value",
        //     "lname": "lname_value",
        //     "ad_desc": "ad_desc_value"
        //  }
         
        //  var service_id = "default_service";
        //  var template_id = "new_ad";
        //  emailjs.send(service_id, template_id, template_params);

 

    }
    categoryChange = (event) => {
        console.log(event.target.value, event.target.name)
        this.setState({
            categorySelectedId: parseInt(event.target.value)
        })
    }

    render() {
        const { showNewAdModal, categorySelectedId,
            subCategorySelectedId, conditionSelected,
            filteredAds, imgInput, DetailsInput,
        } = this.state;

        const { activeUser, ads, allUsers, handleLogin, handleLogout, handleCreatNewAd } = this.props;

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
        }
        const categoryOptions = filterUniqueCategories().map(ad =>
            <option value={ad.CategoryId}>
                {ad.categoryName}
            </option>)


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
        }

        const subCategoryOptions = filterUniqueSubCategories().map((ad) => {
            const subOp = [];

            if (ad.CategoryId === this.state.categorySelectedId) {
                if (!subOp.includes(ad.subCategoryName)) {
                    subOp.push(ad.subCategoryName);
                    return <option value={ad.SubCategoryId}>
                        {ad.subCategoryName}
                    </option>
                }
            }

        })


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
        }
        const conditionOptions = filterUniqueCondition().map(ad =>
            <option value={ad.conditionIdFound}>
                {ad.Condition}
            </option>)


        const imgURL = imgInput ? URL.createObjectURL(imgInput) : "";

        return (
            <Container>

                <Button variant="primary"
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
                        <Modal.Title
                        >New Ad</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <Form className="mx-auto d-flex justify-content-between w-50 p-3" inline>
                            <Form.Label ></Form.Label>
                            <Form.Row>
                                <Form.Control
                                    onSubmit={this.handleInputChange}
                                    onChange={this.categoryChange}
                                    value={this.state.categorySelectedId}
                                    as="select"
                                    name="categorySelectedId"
                                    className="justify-content-center "
                                >
                                    <option name="categoryOptions"
                                        value="0">Select a Category...</option>
                                    {categoryOptions}
                                </Form.Control>



                                <Form.Label
                                    htmlFor="inlineFormCustomSelectPref"
                                >
                                </Form.Label>
                                <Form.Control
                                    value={this.state.categorySelectedId}
                                    onChange={this.handleInputChange}
                                    as="select"
                                    className="justify-content-center"
                                    name="subCategorySelectedId"

                                >
                                    <option value="0">Select a Sub-Category...</option>
                                    {subCategoryOptions}
                                </Form.Control>


                                <Form.Label
                                    htmlFor="inlineFormCustomSelectPref"
                                >
                                </Form.Label>
                                <Form.Control
                                    onChange={this.categoryChange}
                                    onChange={this.handleInputChange}
                                    value={this.state.categorySelectedId}
                                    as="select"
                                    className="justify-content-center"
                                    name="conditionSelected"

                                >
                                    <option value="0">Select Item Condition...</option>
                                    {conditionOptions}
                                </Form.Control>

                                <Form.Group
                                    controlId="Details"
                                    className="justify-content-center">
                                    <Form.Label> Ad Details</Form.Label>
                                    <Form.Control
                                        value={DetailsInput}
                                        onChange={this.handleInputChange}
                                        type="text" name="DetailsInput" placeholder=" Details...." />

                                </Form.Group>


                                <Form.Group
                                    as={Row}
                                    controlId="img"
                                    className="justify-content-center">
                                    <Form.Label column sm={2}> Img </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            onChange={this.handleFileChange}
                                            type="file"
                                            accept="image/*" />
                                    </Col>
                                </Form.Group>
                                <Image
                                    size="sm"
                                    src={imgURL}
                                    className="preview" >
                                </Image>
                            </Form.Row>


                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={this.handleModalClose}
                        >
                            Cancel
                             </Button>

                        <Button variant="primary"
                            onClick={this.handleCreatAd}
                        >
                            Creat A New Ad
                             </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default NewAdModal;