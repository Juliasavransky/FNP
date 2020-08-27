import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Dropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard'
import { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess } from '../../data/ddData'
import Sorry from "../../components/Sorry we dnot find/sorry"


class smartAgent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categorySelectedId: null,
            subCategorySelectedId: null,
            conditionSelected: null,
            livingAreaSelected: null,
            searchSelected: ""

        };

        this.categoryChange = this.categoryChange.bind(this);
        this.subCategoryChange = this.subCategoryChange.bind(this);
        this.changeItemConditions = this.changeItemConditions.bind(this);
        this.changeItemLivingArea = this.changeItemLivingArea.bind(this);
        this.search = this.search.bind(this);

    }

    categoryChange = (event) => {
        this.setState({
            categorySelectedId: event.target.value,
        })
        console.log(event.target.value);
    }

    subCategoryChange = (event) => {
        this.setState({
            subCategorySelectedId: event.target.value,
        });
        console.log(event.target.value);

    }


    changeItemConditions = (event) => {
        this.setState({
            conditionSelected: event.target.value
        })
        console.log(event.target.value);


    }

    changeItemLivingArea = (event) => {
        this.setState({
            livingAreaSelected: event.target.value
        })
        console.log(event.target.value);


    }

    search = (event) => {
        const { ads, activeUser, allUsers } = this.props;
        const { searchSelected, categorySelectedId, subCategorySelectedId, conditionSelected, livingAreaSelected } = this.state;


        console.log(this.state.searchSelected);
        console.log(this.state.livingAreaSelected);

        const filterdcategorys = ads.filter(ad => ad.CategoryId == categorySelectedId);
        const filterdSubCategorys = ads.filter(ad => ad.filterdcategorys == subCategorySelectedId);
        const filterdConditions = ads.filter(ad => ad.filterdSubCategorys == conditionSelected);
        const filterdLivingArea = allUsers.filter(allUser => allUser.LivingArea == livingAreaSelected);


        console.log(this.state.filterdcategorys);




    }

    render() {

        const { ads, activeUser, allUsers } = this.props;
        const { searchSelected, categorySelectedId, subCategorySelectedId, conditionSelected, livingAreaSelected } = this.state;

        const categoryOption = dataCategoriess.map(itencategorys => <option value={itencategorys.categoryId} > {itencategorys.categoryName} </option>)
        console.log(dataSubCategorys);

        const fileredSubCategorys = dataSubCategorys.filter(dataSubCategory => dataSubCategory.categoryId == this.state.categorySelectedId)
        const subCategoryOption = fileredSubCategorys.map(itenSubCategorys => <option value={itenSubCategorys.subCategoryId} > {itenSubCategorys.subCategoryName} </option>)

        const itemConditionOption = dataConditions.map(itemCondition => <option value={itemCondition.conditionId} > {itemCondition.conditionName} </option>)

        const dataLivingAreasOption = dataLivingAreas.map(livingAreasOption => <option value={livingAreasOption.livingAreaId} > {livingAreasOption.livingAreaName} </option>)

        // const searchresolt = ads.filter(ad => ad.Category || ad.SubCategory || ad.details === search)
        // const searchUpdatedUi = searchUpdated.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)
        // console.log(searchUpdated);

        // const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null



        //if 
        // const searchresolt = searchresolt.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        //else 
        // const noResolts = !activeUser ? <Sorry/> : null



        return (
            <div>
                <Container>
                    <Form inline>
                        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                            Categorys
                     </Form.Label>
                        <Form.Control
                            onChange={this.categoryChange}
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            value={this.state.categorySelectedId}
                        >
                            {categoryOption}
                        </Form.Control>
                    </Form>

                    <Form inline>
                        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                            Sub- Categorys
                     </Form.Label>
                        <Form.Control
                            onChange={this.subCategoryChange}
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            value={this.state.subCategorySelectedId}
                        >
                            {subCategoryOption}
                        </Form.Control>
                    </Form>

                    <Form inline>
                        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                            Condition
                     </Form.Label>
                        <Form.Control
                            onChange={this.changeItemConditions}
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            value={this.state.conditionSelected}
                        >
                            {itemConditionOption}
                        </Form.Control>
                    </Form>

                    <Form inline>
                        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                            Living Areas
                     </Form.Label>
                        <Form.Control
                            onChange={this.changeItemLivingArea}
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            value={this.state.livingAreaSelected}
                        >
                            {dataLivingAreasOption}
                        </Form.Control>
                    </Form>

                    <FormControl
                        value={searchSelected} onChange={(event) => this.setState({ searchSelected: event.target.value })}
                        type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={this.search} variant="outline-success">Search</Button>


                    <Sorry />

                </Container>

            </div>
        );
    }
}

export default smartAgent;
