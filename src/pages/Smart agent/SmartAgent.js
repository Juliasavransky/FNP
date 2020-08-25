import React, { Component } from 'react';
import { Form, FormControl, Button, Col, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard'
import { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess } from '../../data/ddData'


const ItemCategory = { categoryName: 'Select Category ...' };
const ItemsubCategory = { SubCategoryName: 'Select Category ...' };
const ItemCondition = { ConditionName: 'Select condition ...' };
const ItemLivingArea = { LivingAreaName: 'Select Area ...' };

class smartAgent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: null,
            subCategorys: null,
            Conditions: null,
            LivingAreas: null,
            subCategorys: dataSubCategorys,

        };
        console.log(this.state)

        this.categoryChange = this.categoryChange.bind(this);
        this.subCategoryChange = this.subCategoryChange.bind(this);
        this.changeItemConditions = this.changeItemConditions.bind(this);
        this.changeItemLivingArea = this.changeItemLivingArea.bind(this);
        // this.search = this.search.bind(this);

    }



    categoryChange = (event) => {
        const category = event.target.value;
        // const subCategorys = dataSubCategorys.filter(SubCategory => SubCategory.Categoryid === Category.CategoryId);


        this.setState({
            category: category,
            // subCategorys: subCategorys,

        });
        console.log(event);

    }

    subCategoryChange = (event) => {
        const subCategory = event.target.value;


        this.setState({
            subCategory: event.target.value,

        });
        console.log(event);

    }

    changeItemConditions = (event) => {
        this.setState({
            Conditions: event.target.value
        })
        console.log(event);

    }


    changeItemLivingArea = (event) => {
        this.setState({
            LivingAreas: event.target.value
        });
        console.log(this.setState)

    }
    // search = (e) => {
    //     const { search } = this.state;

    //     this.setState({
    //         search: e.target.value
    //     });
    //     console.log(search);

    // }

    render() {

        const { ads, search, activeUser, allUsers } = this.props;
        const { category, subCategory, Conditions, LivingAreas } = this.state;

        // const ??? = ???.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)


        return (
            <div>


                <Dropdown>
                    <Dropdown.Toggle className="mt-4 mb-4" variant="success"  id="dropdown-basic">
                        Categorys
                            </Dropdown.Toggle>

                    <Dropdown.Menu
                        data={dataCategoriess}
                        textField="categoryName"
                        onChange={this.categoryChange}
                        value={category}
                    >
                        <Dropdown.Item defaultItem={ItemCategory} href="#/action-1"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown>
                    <Dropdown.Toggle className="mt-4 mb-4" variant="success" id="dropdown-basic">
                        Sub-Categorys
                            </Dropdown.Toggle>

                    <Dropdown.Menu
                        data={dataSubCategorys}
                        textField="SubCategoryName"
                        onChange={this.subCategoryChange}
                        value={subCategory}
                    >
                        <Dropdown.Item defaultItem={ItemsubCategory} href="#/action-1"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle className="mt-4 mb-4"variant="success" id="dropdown-basic">
                        Item Condition
                     </Dropdown.Toggle>

                    <Dropdown.Menu
                        data={dataConditions}
                        onChange={this.changeItemConditions}
                        value={Conditions}
                    >
                        <Dropdown.Item textField="ConditionName"
                            defaultItem={ItemCondition}
                            href="#/action-1"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>





                <Dropdown>
                    <Dropdown.Toggle className="mt-4 mb-4" variant="success" id="dropdown-basic">
                        Areas
                            </Dropdown.Toggle>
                    <Dropdown.Menu
                        data={dataLivingAreas}
                        textField="LivingAreaName"
                        onChange={this.changeItemLivingArea}
                        value={LivingAreas}>
                        <Dropdown.Item defaultItem={ItemLivingArea} href="#/action-1"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default smartAgent;
