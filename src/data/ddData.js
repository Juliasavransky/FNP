// import jsonUsers from '../src/data/users.json';
// import jsonAds from '../src/data/Ads.json';

const dataCategoriess = [
    { categoryName: "Clothing", CategoryId: 1 },
    { categoryName: "Toys and Games", CategoryId: 2 },
    { categoryName: "For The Babys", CategoryId: 3 },
    { categoryName: "For Moms", CategoryId: 4 },

];

const dataSubCategorys = [
    { SubCategoryName: "Coats and Jackets", SubCategoryId: 11, CategoryId: 1 },
    { SubCategoryName: "Special Events", SubCategoryId: 12, CategoryId: 1 },
    { SubCategoryName: "Casual", SubCategoryId: 13, CategoryId: 1 },
    { SubCategoryName: "Shoes", SubCategoryId: 14, CategoryId: 1 },
    { SubCategoryName: "Clothing-Other", SubCategoryId: 15, CategoryId: 1 },

    { SubCategoryName: "Dolls", SubCategoryId: 21, CategoryId: 2 },
    { SubCategoryName: "Board Games", SubCategoryId: 22, CategoryId: 2 },
    { SubCategoryName: "Books", SubCategoryId: 23, CategoryId: 2 },
    { SubCategoryName: "Lego", SubCategoryId: 24, CategoryId: 2 },
    { SubCategoryName: "ToysAndGames-Other", SubCategoryId: 25, CategoryId: 2 },

    { SubCategoryName: "Furniture", SubCategoryId: 31, CategoryId:3 },
    { SubCategoryName: "Safety", SubCategoryId: 32, CategoryId:3 },
    { SubCategoryName: "Carriage", SubCategoryId: 33, CategoryId:3 },
    { SubCategoryName: "Playpen Cradle", SubCategoryId: 34, CategoryId:3 },
    { SubCategoryName: "ForTheBaybys-Other", SubCategoryId: 35, CategoryId:3 },

    { SubCategoryName: "pregnancy clothes", SubCategoryId: 41, CategoryId:4 },
    { SubCategoryName: "Breast Pumps", SubCategoryId: 42, CategoryId:4 },
    { SubCategoryName: "books", SubCategoryId: 43, CategoryId:4 },
    { SubCategoryName: "Supplements", SubCategoryId: 44, CategoryId:4 },
    { SubCategoryName: "ForMoms-Other", SubCategoryId: 45, CategoryId:4 },

];

const dataConditions = [
    { ConditionName: "New", ConditionId: 1 },
    { ConditionName: "Good", ConditionId: 2 },
    { ConditionName: "used-in a good condition", ConditionId: 3 }
   
];

const dataLivingAreas = [
    { LivingAreaName: "Center", LivingAreaId: 1 },
    { LivingAreaName: "North", LivingAreaId: 2 },
    { LivingAreaName: "Jerusalem", LivingAreaId: 3 },
    { LivingAreaName: "South", LivingAreaId: 4 },
    { LivingAreaName: "West", LivingAreaId: 5 },

];

export { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess};
