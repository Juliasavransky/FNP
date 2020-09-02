import React, { Component } from 'react';
import { Form, Button, Modal, Container, Image, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class RequestForItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewAdModal: false,
            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,
            livingAreaIdSelected: null,
            DetailsInput: "",
            filteredAds: [],
            sendEmail: null,
        }
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatAd = this.handleCreatAd.bind(this);
        this.cleanModalData = this.cleanModalData.bind(this);
    }


    handleModalClose() {
        this.setState({
            showNewAdModal: false
        })
    }

    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    cleanModalData() {
        this.setState({
            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,
            DetailsInput: "",
            livingAreaIdSelected: null
        })
    }

    handleCreatSmartAgent(event) {
        const { livingAreaIdSelected, conditionSelected,
             DetailsInput,  categorySelectedId,
              subCategorySelectedId } = this.state;

        const { handleCreatNewAd, activeUser, ads, allUsers } = this.props

        const newAd = {
            CategoryId: categorySelectedId,
            SubCategoryId: subCategorySelectedId,
            Details: DetailsInput,
            conditionId: conditionSelected,
            userId: activeUser.id,
            livingAreaId: livingAreaIdSelected
        };
        console.log("handleCreatNewAd", this.props.handleCreatSmartAgent)
        console.log("props", this.props)


        this.props.handleCreatSmartAgent(newAgent);
        this.handleModalClose();
        this.cleanModalData();

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
            subCategorySelectedId: parseInt(event.target.value),
            conditionSelected: parseInt(event.target.value),
            livingAreaIdSelected: parseInt(event.target.value),
            sendEmail: event.target.Check,
        })
    }

    render() {

        const { showNewAdModal, categorySelectedId,
            subCategorySelectedId, conditionSelected,
            filteredAds, DetailsInput, livingAreaIdSelected,
        } = this.state;

        const { activeUser, ads, allUsers, handleLogin, handleLogout, handleCreatNewAd, ad } = this.props;
        console.log("ads", ads)
        // a function that filters ads with the same category
        const filterUniqueCategories = () => {

            let categoryIdsFound = [];
            let uniqueCategoryAds = [];

            ads.forEach(ad => {
                if (!categoryIdsFound.includes(ad.CategoryId)) {
                    categoryIdsFound.push(parseInt(ad.CategoryId));
                    uniqueCategoryAds.push(ad);
                } console.log("ad", ad)
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

        // a function that filters ads with the same living Area
        const filterUniquelivingArea = () => {
            let livingAreaIdFound = [];
            let livingAreaIdUsers = [];


            allUsers.forEach(user => {
                if (!livingAreaIdFound.includes(user.livingAreaId)) {
                    livingAreaIdFound.push(parseInt(user.livingAreaId));
                    livingAreaIdUsers.push(user);
                }
            });

            return livingAreaIdUsers;
        }
        const livingAreaOptions = filterUniquelivingArea().map(user =>
            <option value={user.livingAreaIdFound}>
                {user.livingArea}
            </option>)


        return (

            <Container>

                <Button variant="primary"
                    onClick={() => this.setState({ showNewAdModal: true })}>
                    Looking for Item
                </Button>
                <Modal
                    size="lg justify-content-center"
                    show={showNewAdModal}
                    onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title
                        >Creat new Smart agent
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
                                        value="0">Select a Category...</option>
                                    {categoryOptions}
                                </Form.Control>




                                <Form.Control
                                    style={{ width: '22rem' }}
                                    value={this.state.subCategorySelectedId}
                                    onChange={this.handleInputChange}
                                    onChange={this.categoryChange}
                                    as="select"
                                    className="justify-content-center"
                                    name="subCategorySelectedId" >
                                    <option value="0">Select a Sub-Category...</option>
                                    {subCategoryOptions}
                                </Form.Control>


                                <Form.Control
                                    style={{ width: '22rem' }}
                                    onChange={this.categoryChange}
                                    onChange={this.handleInputChange}
                                    value={this.state.conditionSelected}
                                    as="select"
                                    className="justify-content-center"
                                    name="conditionSelected" >
                                    <option value="0">Select Item Condition...</option>
                                    {conditionOptions}
                                </Form.Control>



                                <Form.Control
                                    style={{ width: '22rem' }}
                                    onChange={this.categoryChange}
                                    onChange={this.handleInputChange}
                                    value={this.state.livingAreaIdSelected}
                                    as="select"
                                    className="justify-content-center"
                                    name="livingAreaIdSelected" >
                                    <option value="0">Select Item living Area...</option>
                                    {livingAreaOptions}
                                </Form.Control>


                                <Form.Group
                                    controlId="Details"
                                    className="justify-content-center">
                                    <Form.Control
                                        as="textarea"
                                        style={{ width: '40rem' }}
                                        rows="2"
                                        value={DetailsInput}
                                        onChange={this.handleInputChange}
                                        type="text" name="DetailsInput" placeholder="Ad Details..." />
                                </Form.Group>


                                <Form.Check
                                className="p-4"
                                    onChange={this.handleInputChange}
                                    onChange={this.categoryChange}
                                    type="checkbox"
                                    label="Send me an Email" />
                            </Form.Row>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={this.handleModalClose}
                            onClick={this.cleanModalData}>
                            Cansel
                         </Button>

                        <Button variant="primary"
                            onClick={this.handleCreatAd} >
                            Creat new Smart agent
                         </Button>
                    </Modal.Footer>
                </Modal>
            </Container >
        );
    }
}

export default RequestForItem;