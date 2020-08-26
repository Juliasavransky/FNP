import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Dropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard'
import { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess } from '../../data/ddData'

class smartAgent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            CategoryId: null,
            SubCategoryId: null,
            condition: null,
            LivingArea: null,

        };

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
        console.log(this.setState);
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
        console.log(item.condition);

    }

    changeItemLivingArea = (item) => {
        const { allUsers } = this.props;

        this.setState({
            LivingArea: item.LivingArea
        })

    }

    search = (e) => {
        this.setState({
            search: e.target.value

        })


    }

    render() {
        const { ads, search, activeUser, allUsers } = this.props;
        const { category, subCategory, Conditions, LivingAreas } = this.state;

        const categoryOption = dataCategoriess.map(itencategorys => <option value={this.state.value} onChange={() => this.categoryChange(itencategorys)}> {itencategorys.categoryName} </option>)
        const filterdcategorys = ads.filter(ad => ad.categoryName === this.state.condition);

        const fileredSubCategorys = dataSubCategorys.filter(dataSubCategory => dataSubCategory.CategoryId === this.state.CategoryId)
        const subCategoryOption = fileredSubCategorys.map(itenSubCategorys => <option value={this.state.value} onChange={() => this.subCategoryChange(itenSubCategorys)} > {itenSubCategorys.SubCategoryName} </option>)
        const filterdSubCategorys = ads.filter(ad => ad.subCategoryName === this.state.condition);

        const itemConditionOption = dataConditions.map(itemCondition => <option value={this.state.value} onChange={() => this.changeItemConditions(itemCondition)}> {itemCondition.ConditionName} </option>)
        const filterdConditions = ads.filter(ad => ad.Condition === this.state.condition);

        const dataLivingAreasOption = dataLivingAreas.map(LivingAreasOption => <option value={this.state.value} onChange={() => this.changeItemLivingArea(LivingAreasOption)}> {LivingAreasOption.LivingAreaName} </option>)
        const filterdLivingArea = allUsers.filter(allUser => allUser.LivingArea === this.state.condition);

        // const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null
        // const ??? = ???.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

        return (
            <div>
                <Container>
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Categorys
                     </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        value={this.state.value}
                    >
                        {categoryOption}
                        
                    </Form.Control>
                </Form>

                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                       Sub- Categorys
                     </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        value={this.state.value}
                        
                    >
                                                

                        {subCategoryOption}
                    </Form.Control>
                </Form>

                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    Condition
                     </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        value={this.state.value}
                        
                    >
                        {itemConditionOption}
                    </Form.Control>
                </Form>

                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    Living Areas
                     </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        value={this.state.value}
                        
                    >
                        {dataLivingAreasOption}
                    </Form.Control>
                </Form>

                <FormControl
                    value={search} onChange={(e) => this.setState({ search: e.target.value })}
                    type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={this.state.search} variant="outline-success">Search</Button>
                </Container>
            </div>
        );
    }
}

export default smartAgent;