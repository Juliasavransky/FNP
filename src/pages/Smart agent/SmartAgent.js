import React, { Component } from 'react';
import {
  Form,
  FormControl,
  Button,
  Col,
  Dropdown,
  Row,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdCard from '../../components/AdCard/AdCard';
import {
  dataLivingAreas,
  dataConditions,
  dataSubCategorys,
  dataCategoriess,
} from '../../data/ddData';
import Sorry from '../../components/Sorry we didnt find/sorry';

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

  search = event => {
    const { ads, activeUser, allUsers } = this.props;
    const {
      searchSelected,
      categorySelectedId,
      subCategorySelectedId,
      conditionSelected,
      livingAreaSelected,
    } = this.state;

    //console.log('searchSelected', this.state.searchSelected);
    //console.log('livingAreaSelected', this.state.livingAreaSelected);

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
      <Col key={ad.id} lg={3} md={4} sm={6}>
        <AdCard ad={ad} />
      </Col>
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
      <div>
        <Container className=" d-flex  flex-column bd-highlight mb-3 mt-5">
          <Form
            className="mx-auto  d-flex justify-content-between w-50 p-2"
            inline
          >
            <Form.Label htmlFor="inlineFormCustomSelectPref">
              Categories
            </Form.Label>
            <Form.Control
              onChange={this.categoryChange}
              as="select"
              className=""
              id="inlineFormCustomSelectPref"
              value={this.state.categorySelectedId}
            >
              <option value="0">Select A Category</option>
              {categoryOption}
            </Form.Control>
          </Form>

          <Form
            className="d-flex justify-content-between mx-auto w-50 p-2"
            inline
          >
            <Form.Label className="" htmlFor="inlineFormCustomSelectPref">
              Sub-Categories
            </Form.Label>
            <Form.Control
              onChange={this.subCategoryChange}
              as="select"
              className=""
              id="inlineFormCustomSelectPref"
              value={this.state.subCategorySelectedId}
            >
              <option value="0">Select A Sub-Category</option>
              {subCategoryOption}
            </Form.Control>
          </Form>

          <Form
            className="d-flex justify-content-between mx-auto w-50 p-2 "
            inline
          >
            <Form.Label className="" htmlFor="inlineFormCustomSelectPref">
              Condition
            </Form.Label>
            <Form.Control
              onChange={this.changeItemConditions}
              as="select"
              className=""
              id="inlineFormCustomSelectPref"
              value={this.state.conditionSelected}
            >
              <option value="0">Select A Condition</option>
              {itemConditionOption}
            </Form.Control>
          </Form>

          <Form
            className="d-flex justify-content-between mx-auto w-50 p-2"
            inline
          >
            <Form.Label className="" htmlFor="inlineFormCustomSelectPref">
              Living Area
            </Form.Label>
            <Form.Control
              onChange={this.changeItemLivingArea}
              as="select"
              className=""
              id="inlineFormCustomSelectPref"
              value={this.state.livingAreaSelected}
            >
              <option value="0">Select An Area</option>
              {dataLivingAreasOption}
            </Form.Control>
          </Form>

          <Form
            className="d-flex justify-content-between mx-auto w-50 p-2"
            inline
          >
            <Form.Label className="" htmlFor="inlineFormCustomSelectPref">
              Search
            </Form.Label>
            <FormControl
              value={searchSelected}
              onChange={event =>
                this.setState({ searchSelected: event.target.value })
              }
              type="text"
              placeholder="Search"
              className=""
            />
          </Form>
          <Button
            className="d-flex justify-content-between mx-auto w-50 p-2 mb-3 "
            onClick={this.search}
            variant="outline-success"
          >
            Search
          </Button>

          {filteredAds && filteredAds.length > 0 ? (
            <Row>{filteredAds}</Row>
          ) : (
            search && <Sorry />
          )}
        </Container>
      </div>
    );
  }
}

export default SmartAgent;
