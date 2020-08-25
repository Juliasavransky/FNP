// import React, { Component } from 'react';
// import { Form, FormControl, Button, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdCard from '../../components/AdCard/AdCard'


// // const defaultItemCategory = { categoryName: 'Select Category ...' };
// // const defaultItemProduct = { productName: 'Select Product ...' };
// // const defaultItemOrder = { orderName: 'Select Order ...' };

// // class AppComponent extends React.Component {
// //     state = {
// //         category: null,
// //         product: null,
// //         order: null,
// //         orders: dataOrders,
// //         products: dataProducts
// //     };

// //     categoryChange = (event) => {
// //         const category = event.target.value;
// //         const products = dataProducts.filter(product => product.categoryId === category.categoryId);

// //         this.setState({
// //             category: category,
// //             products: products,
// //             product: null,
// //             order: null
// //         });
// //     }

// //     productChange = (event) => {
// //         const product = event.target.value;
// //         const orders = dataOrders.filter(order => order.productId === product.productId);

// //         this.setState({
// //             product: product,
// //             orders: orders,
// //             order: null
// //         });
// //     }

// //     orderChange = (event) => {
// //         this.setState({ order: event.target.value });
// //     }

// //     render() {
// //         const category = this.state.category;
// //         const product = this.state.product;
// //         const order = this.state.order;

// //         const hasCategory = category && category !== defaultItemCategory;
// //         const hasProduct = product && product !== defaultItemProduct;

// //         return (
// //             <div>
// //                 <div style={{ display: 'inline-block' }}>
// //                     Categories
// //                     <br />
// //                     <DropDownList
// //                         data={dataCategories}
// //                         textField="categoryName"
// //                         onChange={this.categoryChange}
// //                         defaultItem={defaultItemCategory}
// //                         value={category}
// //                     />
// //                 </div>
// //                 <div style={{ display: 'inline-block', marginLeft: '30px' }}>
// //                     Products
// //                     <br />
// //                     <DropDownList
// //                         disabled={!hasCategory}
// //                         data={this.state.products}
// //                         textField="productName"
// //                         onChange={this.productChange}
// //                         defaultItem={defaultItemProduct}
// //                         value={product}
// //                     />
// //                 </div>
// //                 <div style={{ display: 'inline-block', marginLeft: '30px' }}>
// //                     Orders
// //                     <br />
// //                     <DropDownList
// //                         disabled={!hasProduct}
// //                         data={this.state.orders}
// //                         textField="orderName"
// //                         onChange={this.orderChange}
// //                         defaultItem={defaultItemOrder}
// //                         value={order}
// //                     />
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
// // "id": 1,
// // "categoryId":1,
// // "category": "Clothing",
// // "SubCategoryId":11,
// // "subCategory": "Coats and Jackets",
// // "img": "https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G24/shotview-315x472/1592/962-548s.jpg",
// // "Date": "23.07.20",
// // "Details": "Lego Classic, in a good condition",
// // "Condition": "Good",
// // "userId":2
// // "Living Area": "Center",

// const adscategorys = { category: 'Select Category ...' };
// const adssubCategory = { subCategory: 'Select Category ...' };
// const adsCondition = { Condition: 'Select Category ...' };
// const allUsersLivingArea = { LivingArea: 'Select Category ...' };


// class smartAgent extends Component {

//     constructor(props) {
//         super(props);
//         const { ads } = this.props

//         console.log(this.props)

//         this.state = {
//             categorys: null,
//             subCategorys: null,
//             Conditions: null,
//             LivingAreas: null,
//             subCategory: adsSubCategorys,

//         };
//         console.log(this.state)
//         this.categoryChange = this.categoryChange.bind(this);
//         this.subCategoryChange = this.subCategoryChange.bind(this);
//         this.handleChangeItem = this.handleChangeItem.bind(this);
//         this.handleChangeArea = this.handleChangeArea.bind(this);
//         this.search = this.search.bind(this);

//     }
//     subCategoryChange

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


//     subCategoryChange = (event) => {
//         const subCategory = event.target.value;
//         const subCategorys= ads.filter(ad=> SubCategoryId === category);

    categoryChange = (event) => {
        const category = event.target.value;
        // const subCategorys = dataSubCategorys.filter(SubCategory => SubCategory.Categoryid === Category.CategoryId);

//         this.setState({
//             categorys: category,
//             subCategorys: subCategorys,

        this.setState({
            category: category,
            // subCategorys: subCategorys,

        });
        console.log(event);

    }

    subCategoryChange = (event) => {
        const subCategory = event.target.value;

// //         this.setState({
// //             product: product,
// //             orders: orders,
// //             order: null
// //         });
// //     }

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


//         const mainCondition = Object.keys(itemcondition).map((key, i) => <option key={i} itemcondition={key}>{key}</option>)
//         // const subCondition = itemcondition[this.state.value].map((cond, i) => <option key={i} itemcondition={cond}>{cond}</option>)


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

// export default smartAgent;
