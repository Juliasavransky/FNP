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
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
              Categories
            </Form.Label>
            <Form.Control
              onChange={this.categoryChange}
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              value={this.state.categorySelectedId}
            >
              <option value="0">Select a Category...</option>
              {categoryOption}
            </Form.Control>
          </Form>

          <Form inline>
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
              Sub- Categories
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
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
              Condition
            </Form.Label>
            <Form.Control
              onChange={this.changeItemConditions}
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              value={this.state.conditionSelected}
            >
              <option value="0">Select a Condition...</option>
              {itemConditionOption}
            </Form.Control>
          </Form>

          <Form inline>
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
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
            value={searchSelected}
            onChange={event =>
              this.setState({ searchSelected: event.target.value })
            }
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button onClick={this.search} variant="outline-success">
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
