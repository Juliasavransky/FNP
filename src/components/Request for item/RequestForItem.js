import React, { Component } from 'react';
import { Form, Button, Modal, Container, } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class RequestForItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewAgentModal: false,
            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,
            livingAreaIdSelected: null,
            detailsInput: "",
            filteredAgents: [],
            sendEmail: null,
        }
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cleanAndHideModalData = this.cleanAndHideModalData.bind(this);
        this.handleCreatSmartAgent = this.handleCreatSmartAgent.bind(this);
    }
    
componentDidMount(){
    console.log("RequestForItem" , this.props)
}
    handleModalClose() {
        this.setState({
            showNewAgentModal: false
        })
    }

    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    cleanAndHideModalData() {
        this.setState({
            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,
            detailsInput: "",
            livingAreaIdSelected: null,
            showNewAgentModal: false

        })
    }

    handleCreatSmartAgent(event) {

        const { livingAreaIdSelected, conditionSelected,
             detailsInput,  categorySelectedId,
              subCategorySelectedId, 
              categoryName, subCategoryName, imgInput,
             Condition,  } = this.state;

        const { activeUser, ads, allUsers ,smartAgent,handleCreatSmartNewAgent,requests} = this.props

        const newAgent = {
            CategoryId: categorySelectedId,
            SubCategoryId: subCategorySelectedId,
            Details: detailsInput,
            conditionId: conditionSelected,
            userId: activeUser.id,
            livingAreaId: livingAreaIdSelected
        };
        console.log("handleCreatSmartAgent", this.props.handleCreatSmartAgent)
        console.log("props", this.props)


        this.handleCreatSmartNewAgent(newAgent);
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
    categoryChange = (event) => {
        console.log(event.target.value, event.target.name)
        this.setState({
            categorySelectedId: parseInt(event.target.value),
        })
    }
    subCategoryChange = (event) => {
        this.setState({
            subCategorySelectedId: parseInt(event.target.value),
        })
    }
    conditionChange = (event) => {
        this.setState({
            conditionSelected: parseInt(event.target.value),
        })
    }
    livingAreaChange = (event) => {
        this.setState({
            livingAreaIdSelected: parseInt(event.target.value),
            // sendEmail: event.target.Check,
        })
    }
    sendEmailChange = (event) => {
        this.setState({
            sendEmail: event.target.Check,
        })
    }

    render() {

        const { showNewAgentModal, categorySelectedId, sendEmail,
            subCategorySelectedId, conditionSelected,
            filteredAgents, detailsInput, livingAreaIdSelected,
        } = this.state;

        const { activeUser, ads, allUsers, handleCreatSmartAgent, ad, requests } = this.props;
        console.log("ads", ads)
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
            <option key={ad.id} value={ad.CategoryId}>
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
                    return <option key={ad.id} value={ad.SubCategoryId}>
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
            <option key={ad.id} value={ad.conditionIdFound}>
                {ad.Condition}
            </option>)

        // a function that filters ads with the same living Area
        const filterUniquelivingArea = () => {
            let livingAreaIdFound = [];
            let livingAreaIdUsers = [];


            allUsers && allUsers.forEach(user => {
                if (!livingAreaIdFound.includes(user.livingAreaId)) {
                    livingAreaIdFound.push(parseInt(user.livingAreaId));
                    livingAreaIdUsers.push(user);
                    
                }
            });

            return livingAreaIdUsers;
        }
        const livingAreaOptions = filterUniquelivingArea().map(user =>
            <option key={user.id} value={user.livingAreaIdFound}>
                {user.livingArea}
            </option>)


        return (

            <Container>

                <Button variant="primary"
                    onClick={() => this.setState({ showNewAgentModal: true })}>
                    I'm Looking for An Item
                </Button>
                <Modal
                    size="lg justify-content-center"
                    show={showNewAgentModal}
                    onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title
                        >  Creat A New Agent
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <Form className="mx-auto d-flex justify-content-between w-150 p-3" inline>
                            <Form.Row>
                                <Form.Control
                                    style={{ width: '22rem' }}
                                    onSubmit={this.handleInputChange}
                                    onChange={this.categoryChange}
                                    value={this.state.categorySelectedId}
                                    as="select"
                                    name="categorySelectedId"
                                    className="justify-content-center " >
                                    <option name="categoryOptions"
                                        value="0">Select a Category</option>
                                    {categoryOptions}
                                </Form.Control>




                                <Form.Control
                                    style={{ width: '22rem' }}
                                    value={this.state.subCategorySelectedId}
                                    onChange={this.handleInputChange}
                                    onChange={this.subCategoryChange}
                                    as="select"
                                    className="justify-content-center"
                                    name="subCategorySelectedId" >
                                    <option value="0">Select A Sub-Category</option>
                                    {subCategoryOptions}
                                </Form.Control>


                                <Form.Control
                                    style={{ width: '22rem' }}
                                    onChange={this.conditionChange}
                                    onChange={this.handleInputChange}
                                    value={this.state.conditionSelected}
                                    as="select"
                                    className="justify-content-center"
                                    name="conditionSelected" >
                                    <option value="0">Select Item Condition</option>
                                    {conditionOptions}
                                </Form.Control>



                                <Form.Control
                                    style={{ width: '22rem' }}
                                    onChange={this.livingAreaChange}
                                    onChange={this.handleInputChange}
                                    value={this.state.livingAreaIdSelected}
                                    as="select"
                                    className="justify-content-center"
                                    name="livingAreaIdSelected" >
                                    <option value="0">Select Item Location</option>
                                    {livingAreaOptions}
                                </Form.Control>


                                <Form.Group
                                    controlId="Details"
                                    className="justify-content-center">
                                    <Form.Control
                                        as="textarea"
                                        style={{ width: '40rem' }}
                                        rows="2"
                                        value={detailsInput}
                                        onChange={this.handleInputChange}
                                        type="text" name="detailsInput" placeholder="Ad Details..." />
                                </Form.Group>


                                <Form.Check
                                className="p-4"
                                    onChange={this.handleInputChange}
                                    onChange={this.sendEmailChange}
                                    type="checkbox"
                                    label="Send Me Email Alerts" />
                            </Form.Row>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
<<<<<<< HEAD
                            onClick={this.handleModalClose}
                            onClick={this.cleanModalData}>
                            Cancel
=======
                            onClick={this.cleanAndHideModalData}>
                            Cansel
>>>>>>> d5ea63334d90c7385543fedf57f1f72003f6a740
                         </Button>

                        <Button variant="primary"
                            onClick={this.handleCreatSmartAgent} >
                            Creat A New Agent
                         </Button>
                    </Modal.Footer>
                </Modal>
            </Container >
        );
    }
}

export default RequestForItem;