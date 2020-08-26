import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard'
import { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess } from '../../data/ddData'

class smartAgent extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            CategoryId: null,
            SubCategoryId: null,
            condition: null,
            LivingArea: null,

        };
        console.log(this.state);

        this.categoryChange = this.categoryChange.bind(this);
        this.subCategoryChange = this.subCategoryChange.bind(this);
        this.changeItemConditions = this.changeItemConditions.bind(this);
        this.changeItemLivingArea = this.changeItemLivingArea.bind(this);
        this.search = this.search.bind(this);

    }

    categoryChange = (item) => {

        const { ads } = this.props;
        this.setState({
            CategoryId: item.CategoryId,

        })

    }


    subCategoryChange = (item) => {
        const { ads } = this.props;

        this.setState({
            SubCategoryId: item.SubCategoryId,
        });
    }


    changeItemConditions = (item) => {
        const { ads } = this.props;

        this.setState({
            condition: item.condition
        })

    }

    changeItemLivingArea = (item) => {
        const { allUsers } = this.props;

        this.setState({
            LivingArea: item.LivingArea
        })

    }

    search = (event) => {
        this.setState({
            search: event.target.value

        })


    }

    render() {
        const { ads, search, activeUser, allUsers } = this.props;
        const { category, subCategory, Conditions, LivingAreas } = this.state;

        const categoryOption = dataCategoriess.map(itencategorys => <Dropdown.Item onClick={() => this.categoryChange(itencategorys)}> {itencategorys.categoryName} </Dropdown.Item>)
        const filterdcategorys = ads.filter(ad => ad.categoryName === this.state.condition);

        const fileredSubCategorys = dataSubCategorys.filter(dataSubCategory => dataSubCategory.CategoryId === this.state.CategoryId)


        const subCategoryOption = fileredSubCategorys.map(itenSubCategorys => <Dropdown.Item onClick={() => this.subCategoryChange(itenSubCategorys)} > {itenSubCategorys.SubCategoryName} </Dropdown.Item>)
        const filterdSubCategorys = ads.filter(ad => ad.subCategoryName === this.state.condition);

        const itemConditionOption = dataConditions.map(itemCondition => <Dropdown.Item onClick={() => this.changeItemConditions(itemCondition)}> {itemCondition.ConditionName} </Dropdown.Item>)
        const filterdConditions = ads.filter(ad => ad.Condition === this.state.condition);

        const dataLivingAreasOption = dataLivingAreas.map(LivingAreasOption => <Dropdown.Item onClick={() => this.changeItemLivingArea(LivingAreasOption)}> {LivingAreasOption.LivingAreaName} </Dropdown.Item>)
        const filterdLivingArea = allUsers.filter(allUser => allUser.LivingArea === this.state.condition);


        // const searchUpdated = ads.filter(ad => ad.Category && ad.SubCategory && ad.details === search)
        // const searchUpdatedUi = searchUpdated.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)


        // const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null
        // const ??? = ???.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        // const filteredDropdown = ads.filter(ad => ad.CategoryId && ad.SubCategoryId === ad);

        return (
            <div>

                <Dropdown>
                    <Dropdown.Toggle className="m-3" variant="success" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle >
                    <Dropdown.Menu
                    >
                        {categoryOption}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="m-3" variant="success" id="dropdown-basic">
                        Sub-Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                    >
                        {subCategoryOption}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="m-3" variant="success" id="dropdown-basic">
                        Item Condition
                     </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {itemConditionOption}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="m-3" variant="success" id="dropdown-basic">
                        Areas
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {dataLivingAreasOption}
                    </Dropdown.Menu>
                </Dropdown>

                <FormControl
                    value={search} onChange={(e) => this.setState({ search: e.target.value })}
                    type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={this.search} variant="outline-success">Search</Button>this.state.serch
            </div>
        );
    }
}

export default smartAgent;