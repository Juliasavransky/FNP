// import React, { Component } from 'react';
// import { Form, FormControl, Button, Col, Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdCard from '../../components/AdCard/AdCard'
// import { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess } from '../../data/ddData'


// const adscategorys = { category: 'Select Category ...' };
// const adssubCategory = { subCategory: 'Select Category ...' };
// const adsCondition = { Condition: 'Select Category ...' };
// const allUsersLivingArea = { LivingArea: 'Select Category ...' };


// class smartAgent extends Component {

//     constructor(props) {
//         super(props);

//         console.log(this.props)

//         this.state = {
//             category: null,
//             subCategory: null,
//             Condition: null,
//             LivingArea: null,
//             subCategorys: dataSubCategorys,
//             categorys: dataCategoriess,
//             Conditions: dataConditions,
//             LivingAreas: dataLivingAreas

//         };
//         console.log(this.state)

//         this.categoryChange = this.categoryChange.bind(this);
//         this.subCategoryChange = this.subCategoryChange.bind(this);
//         this.changeItemConditions = this.changeItemConditions.bind(this);
//         this.changeItemLivingArea = this.changeItemLivingArea.bind(this);
//         this.search = this.search.bind(this);

//     }

//     categoryChange = (event) => {
//         const category = event.target.value;
//         // const subCategorys = ads.filter(ad => SubCategoryId === category);
//         // const subCategorys = dataSubCategorys.filter(SubCategory => SubCategory.Categoryid === Category.CategoryId);


//         this.setState({
//             categorys: category,
//             subCategorys: subCategorys,
//             category: category,


//         })
//         console.log(event);

//     }


//     subCategoryChange = (event) => {
//         const subCategory = event.target.value;
//         // const subCategorys = ads.filter(ad => SubCategoryId === category);


//         this.setState({
//             categorys: category,
//             subCategorys: subCategorys,
//             subCategory: event.target.value,

//         });
//         console.log(event);
//     }


//     changeItemConditions = (event) => {
//         this.setState({
//             Conditions: event.target.value
//         })
//         console.log(event);

//     }
//     changeItemLivingArea = (event) => {
//         this.setState({
//             search: event.target.value,
//             LivingAreas: event.target.value
//         })
//         console.log(this.setState)

//     }
//     search = (event) => {
//         this.setState({
//             search: event.target.value
            
//         })
       

//     }

//     render() {
//         const { ads, search, activeUser, allUsers } = this.props;
//         const { category, subCategory, Conditions, LivingAreas } = this.state;

//         // const searchUpdated = ads.filter(ad => ad.Category && ad.SubCategory && ad.details === search)
//         // const searchUpdatedUi = searchUpdated.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)


//         // const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null
//         // const ??? = ???.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad} /></Col>)

//         // const filteredDropdown = ads.filter(ad => ad.CategoryId && ad.SubCategoryId === ad);
//         // console.log(filteredDropdown)

//         return (
//             <div>

//                 <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         Categorys
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu
//                         data={dataCategoriess}
//                         textField="categoryName"
//                         onChange={this.categoryChange}
//                         value={category}
//                     >
//                         <Dropdown.Item defaultItem={ItemCategory} href="#/action-1"></Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>

//                 <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         Sub-Categorys
//                             </Dropdown.Toggle>

//                     <Dropdown.Menu
//                         data={dataSubCategorys}
//                         textField="SubCategoryName"
//                         onChange={this.subCategoryChange}
//                         value={subCategory}
//                     >
//                         <Dropdown.Item defaultItem={ItemsubCategory} href="#/action-1"></Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>

//                 <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         Item Condition
//                      </Dropdown.Toggle>

//                     <Dropdown.Menu
//                         data={dataConditions}
//                         onChange={this.changeItemConditions}
//                         value={Conditions}
//                     >
//                         <Dropdown.Item textField="ConditionName"
//                             defaultItem={ItemCondition}
//                             href="#/action-1"></Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>

//                 <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                         Areas
//                      </Dropdown.Toggle>
//                     <Dropdown.Menu
//                         data={dataLivingAreas}
//                         textField="LivingAreaName"
//                         onChange={this.changeItemLivingArea}
//                         value={LivingAreas}>
//                         <Dropdown.Item defaultItem={ItemLivingArea} href="#/action-1"></Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>
//         );
//     }
// }

// export default smartAgent;