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


//     categoryChange = (event) => {
//         const category = event.target.value;
//         const subCategorys= ads.filter(ad=> SubCategoryId === category);


//         this.setState({
//             categorys: category,
//             subCategorys: subCategorys,

//              });
//         console.log(event);

//     }

//     subCategoryChange = (event) => {
//         const subCategory = event.target.value;
//         const subCategorys= ads.filter(ad=> SubCategoryId === category);


//         this.setState({
//             categorys: category,
//             subCategorys: subCategorys,

//              });
//         console.log(event);

//     }
//     //     productChange = (event) => {
// //         const product = event.target.value;
// //         const orders = dataOrders.filter(order => order.productId === product.productId);

// //         this.setState({
// //             product: product,
// //             orders: orders,
// //             order: null
// //         });
// //     }

//     handleChangeItem(event) {
//         const { ads } = this.props

//         console.log();

//     }

//     handleChangeArea(event) {
//         this.setState({
//             userArea: event.target.value
//         });
//     }
//     search = (e) => {
//         const { search } = this.state;

//         this.setState({
//             search: e.target.value
//         });
//         console.log(search);

//     }

//     render() {

//         const { ads, search, activeUser, allUsers } = this.props;


//         const categories = {
//             Clothing: ["Coats and jackets", "Casual", "Special Events", "Shoes", "Other"],
//             "Toys And Games": ["Dolls", "board games", "books", "lego", "Other"],
//             "For Your Baby": ["Safety", "carriage", "playpen cradle", "Other"],
//             "For Moms": ["pregnancy clothes", " Breast pumps", "books", "Supplements", "Other"],
//         }
//         const itemcondition = {
//             "Item condition": ["New", "Good", "used-in a good condition"]

//         }
//         // const userArea = {
//         //     area: ["Center", "North", "Jerusalem", "South", "West"]

//         // }

//         const mainCategory = Object.keys(categories).map((key, i) => <option key={i} value={key}>{key}</option>)
//         const subCategory = categories[this.state.value].map((sub, i) => <option key={i} value={sub}>{sub}</option>)

//         const mainCondition = Object.keys(itemcondition).map((key, i) => <option key={i} itemcondition={key}>{key}</option>)
//         // const subCondition = itemcondition[this.state.value].map((cond, i) => <option key={i} itemcondition={cond}>{cond}</option>)

//         // const mainArea = Object.keys(userArea).map((key, i) => <option key={i} userArea={key}>{key}</option>)
//         // const subArea = userArea[this.state.value].map((area, i) => <option key={i} userArea={area}>{area}</option>)

//         // const smartSearch = ads.filter(ad => ad.CategoryId === Object.keys(categories))

//         // const searchUpdated = ads.filter(ad => ad.Category && ad.SubCategory && ad.details === search)
//         // const searchUpdatedUi = searchUpdated.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

//         const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null

//         const filteredDropdown = ads.filter(ad => ad.CategoryId && ad.SubCategoryId === ad);
//         console.log(filteredDropdown)

//         return (
//             <div>

//                 <Form inline className="m-4" >
//                     <Form.Group as={Col} controlId="formGridState">
//                         <Form.Label className="mr-2">Category</Form.Label>
//                         <Form.Control className="m-3" as="select" value={this.state.value} onChange={this.categoryChange}>
//                             {mainCategory}
//                         </Form.Control>


//                         <Form.Label className="m-3">Sub-Category</Form.Label>
//                         <Form.Control onChange={this.subCategoryChange} value={this.state.value} className="mr-2" as="select" >
//                             {subCategory}
//                             {filteredDropdown}
//                         </Form.Control>

//                         {/* 
//                        <Form.Label className="mr-2">{mainCondition}</Form.Label>
//                         <Form.Control className="m-2" as="select"  itemcondition={this.state.value} onChange={this.handleChangeItem}>
//                             {subCondition}
//                         </Form.Control> */}

//                         {/* <Form.Label className="mr-2">{mainArea}</Form.Label>
//                         <Form.Control className="m-2 " as="select"  userArea={this.state.value} onChange={this.handleChangeArea}>
//                             {subArea}
//                         </Form.Control>  */}


//                     </Form.Group >
//                     <FormControl
//                         value={search} type="submit" value="Submit" onChange={(e) => this.setState({ search: e.target.value })}
//                         className="mr-2" type="text" placeholder="Search for item" className="mr-sm-2" />
//                     <Button onClick={this.search} type="submit" value="Submit" className="mr-2" variant="outline-success">Search</Button>
//                 </Form>
//             </div>
//         );
//     }
// }

// export default smartAgent;
