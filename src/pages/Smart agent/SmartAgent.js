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
import SearchResults from '../../components/Navbar/SearchResults'

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

    // initiate vars
    let filterdcategorys = [...ads];
    let filteredSubCategories = [];
    let filterdConditions = [];
    let filterdLivingArea = [];
    let filteredFreeSearch = [];

    // check if the user select a category
    if (categorySelectedId) {
      // if the user select a category - filter by category
      filterdcategorys = ads.filter(
        ad => ad.CategoryId === parseInt(categorySelectedId)
      );
      console.log('filterdcategorys', filterdcategorys);
    }

    // check if the user select a sub-category
    if (subCategorySelectedId) {
      // if the user select a sub-category - filter by sub-category
      filteredSubCategories = filterdcategorys.filter(
        _category => _category.SubCategoryId === parseInt(subCategorySelectedId)
      );
      console.log('filteredSubCategories', filteredSubCategories);
    } else {
      filteredSubCategories = filterdcategorys;
    }

    // check if the user select a condition
    if (conditionSelected) {
      // if the user select a condition - filter by condition
      filterdConditions = filteredSubCategories.filter(
        _subCategory => _subCategory.conditionId === parseInt(conditionSelected)
      );
      console.log('filterdConditions', filterdConditions);
    } else {
      filterdConditions = filteredSubCategories;
    }

    // check if the user select a living area
    if (livingAreaSelected) {
      // find the living-area id by the living-area name
      const selectedLivingAreaId = dataLivingAreas.find(
        lArea =>
          lArea.livingAreaName?.toLowerCase() ===
          livingAreaSelected?.toLowerCase()
      )?.livingAreaId;

      // if the user select a living area - filter by living area
      filterdLivingArea = filterdConditions.filter(
        _condition => _condition.livingAreaId === selectedLivingAreaId
      );
      console.log('filterdLivingArea', filterdLivingArea);
    } else {
      filterdLivingArea = filterdConditions;
    }

    // check if the user type something in the free-search box
    if (searchSelected) {
      // if the user type something in the free-search box - filter by the free-text
      filteredFreeSearch = filterdLivingArea.filter(
        ad =>
          ad.Details.toLowerCase().includes(searchSelected.toLowerCase()) ||
          ad.categoryName
            .toLowerCase()
            .includes(searchSelected.toLowerCase()) ||
          ad.subCategoryName
            .toLowerCase()
            .includes(searchSelected.toLowerCase()) ||
          ad.Condition.toLowerCase().includes(searchSelected.toLowerCase())
      );
      console.log('filteredFreeSearch', filteredFreeSearch);
    } else {
      filteredFreeSearch = filterdLivingArea;
    }

    const filteredAds = filteredFreeSearch.map(ad => (
      <AdCard key={ad.id} ad={ad} />
    ));

    this.setState({ filteredAds });
  };

  render() {
    const { ads, activeUser, allUsers,searchResults } = this.props;
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


    return (
      <>
        <div className="lupa">
          <Form>
            <Form.Row>
              <FormGroup>
                <Form.Label htmlFor="inlineFormCustomSelectPref">
                  Categories
                </Form.Label>
                <Form.Control
                  // inline
                  // style={{ width: '22rem' }}
                  onChange={this.categoryChange}
                  as="select"
                  id="inlineFormCustomSelectPref"
                  value={this.state.categorySelectedId}
                >
                  <option value="0">Select A Category</option>
                  {categoryOption}
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label htmlFor="inlineFormCustomSelectPref">
                  Sub-Categories
                </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.subCategoryChange}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.subCategorySelectedId}
                >
                  <option value="0">Select A Sub-Category</option>
                  {subCategoryOption}
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label htmlFor="inlineFormCustomSelectPref">
                  Condition
                </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.changeItemConditions}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.conditionSelected}
                >
                  <option value="0">Select A Condition</option>
                  {itemConditionOption}
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label htmlFor="inlineFormCustomSelectPref">
                  Living Area
                </Form.Label>
                <Form.Control
                  // style={{ width: '22rem' }}
                  onChange={this.changeItemLivingArea}
                  as="select"
                  className=""
                  id="inlineFormCustomSelectPref"
                  value={this.state.livingAreaSelected}
                >
                  <option value="0">Select An Area</option>
                  {dataLivingAreasOption}
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label htmlFor="inlineFormCustomSelectPref">
                  Search
                </Form.Label>
                <FormControl
                  // style={{ width: '22rem' }}
                  value={searchSelected}
                  onChange={event =>
                    this.setState({ searchSelected: event.target.value })
                  }
                  type="text"
                  placeholder="Search"
                  className=""
                />

                <Button
                  className="btn-search"
                  onClick={this.search}
                  variant="link"
                >
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
              < SearchResults
                ads={this.props.ads}
                handleLogin={this.props.handleLogin}
                allUsers={this.props.allUsers}
                handleLogout={this.props.handleLogout}
                activeUser={this.props.activeUser}
                handleCreatNewAd={this.props.handleCreatNewAd}
                handleCreatSmartNewAgent={this.props.handleCreatSmartNewAgent}
                searchResults={filteredAds}
              />

            )
          )}
        </Container>
      </>
    );
  }
}

export default SmartAgent;
