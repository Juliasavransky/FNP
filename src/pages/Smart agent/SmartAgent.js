import React, { Component } from 'react';
import './SmartAgent.css';
import {
  Form,
  FormControl,
  Button,
  FormGroup,
  Container,
  CardColumns,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import {
  dataLivingAreas,
  dataConditions,
  dataSubCategorys,
  dataCategoriess,
} from '../../data/ddData';
import Sorry from '../../components/Sorry we didnt find/Sorry';
import { filtersmartagent } from '../../utiles/filter';

class SmartAgent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categorySelectedId: null,
      subCategorySelectedId: null,
      conditionSelected: null,
      livingAreaSelected: null,
      searchSelected: '',
      filteredAds: [],
      search: false,
    };

    this.categoryChange = this.categoryChange.bind(this);
    this.subCategoryChange = this.subCategoryChange.bind(this);
    this.changeItemConditions = this.changeItemConditions.bind(this);
    this.changeItemLivingArea = this.changeItemLivingArea.bind(this);
    this.search = this.search.bind(this);
    this.cleanData = this.cleanData.bind(this);
  }

  categoryChange = event => {
    this.setState({
      categorySelectedId: event.target.value,
    });
  };

  subCategoryChange = event => {
    this.setState({
      subCategorySelectedId: event.target.value,
    });
  };

  changeItemConditions = event => {
    this.setState({
      conditionSelected: event.target.value,
    });
  };

  changeItemLivingArea = event => {
    this.setState({
      livingAreaSelected: event.target.value,
    });
  };

  cleanData() {
    this.setState({
      categorySelectedId: null,
      subCategorySelectedId: null,
      conditionSelected: null,
      livingAreaSelected: null,
      searchSelected: '',
    });
  }
  search = event => {
    const { ads, activeUser, allUsers } = this.props;
    const {
      searchSelected,
      categorySelectedId,
      subCategorySelectedId,
      conditionSelected,
      livingAreaSelected,
    } = this.state;

    let filterdcategorys = ads.filter(
      ad => ad.CategoryId === parseInt(categorySelectedId)
    );
    console.log('filterdcategorys', filterdcategorys);
    if (filterdcategorys.length === 0) filterdcategorys = ads;

    let filteredSubCategories = filterdcategorys.filter(
      _category => _category.SubCategoryId === parseInt(subCategorySelectedId)
    );
    if (filteredSubCategories.length === 0)
      filteredSubCategories = filterdcategorys;

    let filterdConditions = filteredSubCategories.filter(
      _subCategory => _subCategory.conditionId === parseInt(conditionSelected)
    );

    if (filterdConditions.length === 0)
      filterdConditions = filteredSubCategories;


<<<<<<< HEAD
    //לקחת את הפילטר הזה ולרוץ על המודעות החדשות שהיוזר מכניס
    // וצריך לעשות עוד פילטר כזה שירוץ על הבקשות של הסמארט אייגנט
    // להשוות בין 2 התוצאות של שני הפילטרים וכשיש תשובה חייובית אז לשלוח התראה ליוזר (באתר) ליוזר של הרקווסט
=======
      //לקחת את הפילטר הזה ולרוץ על המודעות החדשות שהיוזר מכניס
     // וצריך לעשות עוד פילטר כזה שירוץ על הבקשות של הסמארט אייגנט
     // להשוות בין 2 התוצאות של שני הפילטרים
     // וכשיש תשובה חיובית אז לשלוח התראה ליוזר (באתר) ליוזר של הרקווסט

>>>>>>> 833e6073e703c5b4c71b1a8f300eb6ce777d0f73
    const filteredFreeSearch = filterdConditions.filter(
      ad =>
        ad.Details.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.categoryName.toLowerCase().includes(searchSelected.toLowerCase()) ||
        ad.subCategoryName
          .toLowerCase()
          .includes(searchSelected.toLowerCase()) ||
        ad.Condition.toLowerCase().includes(searchSelected.toLowerCase())
    );

    const filteredAds = filteredFreeSearch.map(ad => (
      <AdCard key={ad.id} ad={ad} />
    ));

    this.setState({ filteredAds: filteredAds });
    this.setState({ search: true });

    const filterdLivingArea = allUsers.filter(
      allUser => allUser.LivingArea === livingAreaSelected
    );
    console.log('filterdLivingArea', filterdLivingArea);
  };

  render() {

    const { ads, activeUser, allUsers } = this.props;
    const {
      searchSelected,
      categorySelectedId,
      subCategorySelectedId,
      conditionSelected,
      livingAreaSelected,
      filteredAds,
      search,
    } = this.state;
    // console.log(filtersmartagent(ads, 1, "Used", "Pills" ))

    const categoryOption = dataCategoriess.map(itencategorys => (
      <option value={itencategorys.categoryId}>
        {itencategorys.categoryName}
      </option>
    ));

    const fileredSubCategorys = dataSubCategorys.filter(
      dataSubCategory =>
        dataSubCategory.categoryId == this.state.categorySelectedId
    );
    const subCategoryOption = fileredSubCategorys.map(itenSubCategorys => (
      <option value={itenSubCategorys.subCategoryId}>
        {itenSubCategorys.subCategoryName}
      </option>
    ));

    const itemConditionOption = dataConditions.map(itemCondition => (
      <option value={itemCondition.conditionId}>
        {itemCondition.conditionName}
      </option>
    ));

    const dataLivingAreasOption = dataLivingAreas.map(livingAreasOption => (
      <option value={livingAreasOption.livingAreaName}>
        {livingAreasOption.livingAreaName}
      </option>
    ));

    // const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null

    return (
      <>
        <div className="lupa">

          <Form>
            <Form.Row>

              <FormGroup >
                <Form.Label
                  htmlFor="inlineFormCustomSelectPref">
                  Categories
            </Form.Label>
                <Form.Control
                  // inline
                  // style={{ width: '22rem' }}
                  onChange={this.categoryChange}
                  as="select"
                  id="inlineFormCustomSelectPref"
                  value={this.state.categorySelectedId} >
                  <option value="0">Select A Category</option>
                  {categoryOption}
                </Form.Control>
              </FormGroup>



              <FormGroup>
                <Form.Label
                  htmlFor="inlineFormCustomSelectPref">
                  Sub-Categories
            </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.subCategoryChange}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.subCategorySelectedId} >
                  <option value="0">Select A Sub-Category</option>
                  {subCategoryOption}
                </Form.Control>
              </FormGroup>



              <FormGroup>
                <Form.Label
                  htmlFor="inlineFormCustomSelectPref">
                  Condition
            </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.changeItemConditions}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.conditionSelected} >
                  <option value="0">Select A Condition</option>
                  {itemConditionOption}
                </Form.Control>
              </FormGroup>



              <FormGroup>
                <Form.Label
                  htmlFor="inlineFormCustomSelectPref">
                  Living Area
            </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.changeItemLivingArea}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.livingAreaSelected} >
                  <option value="0">Select An Area</option>
                  {dataLivingAreasOption}
                </Form.Control>
              </FormGroup>



              <FormGroup>
                <Form.Label
                  htmlFor="inlineFormCustomSelectPref">
                  Search
            </Form.Label>
                <FormControl
                  value={searchSelected}
                  onChange={event =>
                    this.setState({ searchSelected: event.target.value })}
                  type="text"
                  placeholder="Search"
                  className="" />
              </FormGroup>
              <FormGroup>
                <Button
                  className="btn-search"

                  onClick={this.search}
                  variant="link">
                  Search
          </Button>
              </FormGroup>
            </Form.Row>

          </Form>
          <p id="logo">PASS ON</p>
        </div>

        <Container>
          {filteredAds && filteredAds.length > 0 ? (
            <CardColumns>{filteredAds}</CardColumns>
          ) : (
              search && (
                <Sorry
                  ads={this.props.ads}
                  handleLogin={this.props.handleLogin}
                  allUsers={this.props.allUsers}
                  handleLogout={this.props.handleLogout}
                  activeUser={this.props.activeUser}
                  handleCreatNewAd={this.props.handleCreatNewAd}
                  handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
                />
              )
            )}
        </Container>
      </>
    );
  }
}

export default SmartAgent;
