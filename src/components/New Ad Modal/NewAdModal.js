import React, { Component } from 'react';
import { Form, Button, Modal, Container, Image } from 'react-bootstrap';
import emailjs from 'emailjs-com';



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
        const { handleCreatNewAd }= this.props
        // const {activeUser}=this.state;

        const newAd = {
            // categoryName: categorySelectedId,
            // subCategoryName: subCategorySelectedId ,
            img: imgInput,
            Details: DetailsInput,
            // Condition: conditionSelected ,

        };

        // this.props.handleCreatNewAd(newAd);
        // console.log("handleCreatNewAd",newAd)
        this.handleModalClose();

        // // // //  send an email

        //  var template_params = {
        //     "to_email": this.props.activeUser.email,
        //     "ad_name": DetailsInput,
        //     "fname": this.props.activeUser.fname,
        //     "lname": this.props.activeUser.lname,
        //     // "category_name":categorySelectedId,
        //     // "subcatgory_name":subCategorySelectedId
        //  }
        //  var service_id = "default_service";
        //  var template_id = "new_ad";
        //  emailjs.send(service_id, template_id, template_params);



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

        // const imgUTL= URL.createObjectURL(imgInput);

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
                            <Form.Label >Categories</Form.Label>
                              <Form.Row>
                            <Form.Control
                                onChange={this.categoryChange}
                                onSubmit={this.handleInputChange}
                                value={this.state.categorySelectedId}
                                as="select"
                                name="categorySelectedId"
                                className="justify-content-center "
                            >
                                <option value="0">Select A Category</option>
                                {categoryOption}
                            </Form.Control>



                            <Form.Label
                                htmlFor="inlineFormCustomSelectPref"
                            >
                                Sub-Categories
                            </Form.Label>
                            <Form.Control
                                onChange={this.categoryChange}
                                value={this.state.categorySelectedId}
                                onChange={this.handleInputChange}
                                as="select"
                                className="justify-content-center"
                                name="subCategorySelectedId"

                            >
                                <option value="0">Select A Category</option>
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

                            >
                                <option value="0">Select A Category</option>
                                {itemConditionOption}
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
                                controlId="img"
                                className="justify-content-center">
                                <Form.Label></Form.Label>
                                <Form.Control value={imgInput}
                                    onChange={this.handleFileChange}
                                    type="file" accept="image/*"
                                    name="imgInput" />
                            </Form.Group>
                            <Image size="sm" 
                            // src={imgURL} 
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
            </div>
        );
    }
}

export default NewAdModal;