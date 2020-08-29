import React, { Component } from 'react';
import { ListGroup, Col, Row, Form, Button, Modal, Container } from 'react-bootstrap';



class NewAdModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewAdModal: false,

            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,

            DetailsInput: "",
            imgInput: "",

            filteredAds: [],
           


        }
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatAd = this.handleCreatAd.bind(this);


    }

    handleModalClose() {
        this.setState({
            showNewAdModal: false
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleCreatAd() {
        const { categoryName, subCategoryName, imgInput, DetailsInput, Condition, } = this.state;

        const newAd = {
            // categoryName: categorySelectedId,
            // subCategoryName: subCategorySelectedId ,
            img : imgInput,
            Details: DetailsInput ,
            // Condition: conditionSelected ,
        
        };


      
        this.props.handleCreatNewAd(newAd);
        this.handleModalClose();
    }


    render() {
        const { showNewAdModal, categorySelectedId,
            subCategorySelectedId, conditionSelected,
            filteredAds, imgInput, DetailsInput,
        } = this.state;

        const { activeUser, ads, allUsers, handleLogin, handleLogout, handleCreatNewAd } = this.props;
        // console.log('handleLogin', handleLogin)


        const categoryOption = ads.map(CategoryName => (
            <option value={CategoryName.CategoryId}>
                {CategoryName.categoryName}
            </option>
        ));

        // const fileredSubCategorys = ads.CategoryId.filter(
        //    ads.subCategoryName =>
        //         ad.CategoryId.SubCategoryId == this.state.categorySelectedId
        // );
        const subCategoryOption = ads.map(subCategoryName => (
            <option value={subCategoryName.SubCategoryId}>
                {subCategoryName.subCategoryName}
            </option>
        ));
        const itemConditionOption = ads.map(Condition => (
            <option value={Condition.Condition}>
              {Condition.Condition}
            </option>
          ));

        return (
            <div>

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

                            
                            <Form.Label
                                htmlFor="inlineFormCustomSelectPref"
                            >
                                Categories
                              </Form.Label>
                            <Form.Control
                                onChange={this.categoryChange}
                                onChange={this.handleInputChange}
                                value={this.state.categorySelectedId}
                                as="select"
                                name="categorySelectedId"
                                className="justify-content-center "
                                id="inlineFormCustomSelectPref"
                            >
                                <option value="0">Select a Category...</option>
                                {categoryOption}
                            </Form.Control>


                            <Form.Label
                                htmlFor="inlineFormCustomSelectPref"
                            >
                               Sub- Categories
                            </Form.Label>
                            <Form.Control
                                onChange={this.categoryChange}
                                value={this.state.categorySelectedId}
                                onChange={this.handleInputChange}
                                as="select"
                                className="justify-content-center"
                                name="subCategorySelectedId"
                                id="inlineFormCustomSelectPref"
                                
                            >
                                <option value="0">Select a Category...</option>
                                {subCategoryOption}
                            </Form.Control>


                            <Form.Label
                                htmlFor="inlineFormCustomSelectPref"
                            >
                                Item Condition
                            </Form.Label>
                            <Form.Control
                                onChange={this.categoryChange}
                                onChange={this.handleInputChange}
                                value={this.state.categorySelectedId}
                                as="select"
                                className="justify-content-center"
                                name="conditionSelected"
                                id="inlineFormCustomSelectPref"
                                
                            >
                                <option value="0">Select a Category...</option>
                                {itemConditionOption}
                            </Form.Control>

                            <Form.Group 
                            controlId="Details"
                            className="justify-content-center">
                            <Form.Label> Ad Details</Form.Label>
                            <Form.Control value={DetailsInput}
                                onChange={this.handleInputChange}
                                type="text" name="DetailsInput" placeholder=" Details...." />
                                
                        </Form.Group>

                        <Form.Group 
                        controlId="img"
                        className="justify-content-center">
                            <Form.Label> Ad Image</Form.Label>
                            <Form.Control value={imgInput}
                                onChange={this.handleInputChange}
                                type="text" name="imgInput" placeholder=" File" />
                        </Form.Group>

          




                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={this.handleModalClose}
                        >
                            Cansel
                             </Button>

                        <Button variant="primary"
                            onClick={this.handleCreatAd}
                        >
                            Creat new Ad
                             </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewAdModal;