import jsonUsers from '../data/users.json'
import jsonAds from '../data/Ads.json'


 const categorys =(data)=>{
 const categorysArr= []

const categorysNames= data.forEach((el) => {
    if(categorysArr.includes(el.categoryName)){
        return
    }else{
        categorysArr.push(el.categoryName)
    }

})
return categorysArr
 }


const dataCategoriess = [
    { categoryName: "Clothing", categoryId: 1 },
    { categoryName: "Toys and Games", categoryId: 2 },
    { categoryName: "For The Babys", categoryId: 3 },
    { categoryName: "For Moms", categoryId: 4 },

];

const dataSubCategorys = [
    { subCategoryName: "Coats and Jackets", subCategoryId: 11, categoryId: 1 },
    { subCategoryName: "Special Events", subCategoryId: 12, categoryId: 1 },
    { subCategoryName: "Casual", subCategoryId: 13, categoryId: 1 },
    { subCategoryName: "Shoes", subCategoryId: 14, categoryId: 1 },
    { subCategoryName: "Clothing-Other", subCategoryId: 15, categoryId: 1 },

    { subCategoryName: "Dolls", subCategoryId: 21, categoryId: 2 },
    { subCategoryName: "Board Games", subCategoryId: 22, categoryId: 2 },
    { subCategoryName: "Books", subCategoryId: 23, categoryId: 2 },
    { subCategoryName: "Lego", subCategoryId: 24, categoryId: 2 },
    { subCategoryName: "ToysAndGames-Other", subCategoryId: 25, categoryId: 2 },

    { subCategoryName: "Furniture", subCategoryId: 31, categoryId:3 },
    { subCategoryName: "Safety", subCategoryId: 32, categoryId:3 },
    { subCategoryName: "Carriage", subCategoryId: 33, categoryId:3 },
    { subCategoryName: "Playpen Cradle", subCategoryId: 34, categoryId:3 },
    { subCategoryName: "ForTheBaybys-Other", subCategoryId: 35, categoryId:3 },

    { subCategoryName: "pregnancy clothes", subCategoryId: 41, categoryId:4 },
    { subCategoryName: "Breast Pumps", subCategoryId: 42, categoryId:4 },
    { subCategoryName: "books", subCategoryId: 43, categoryId:4 },
    { subCategoryName: "Supplements", subCategoryId: 44, categoryId:4 },
    { subCategoryName: "ForMoms-Other", subCategoryId: 45, categoryId:4 },

];

const dataConditions = [
    { conditionName: "New", conditionId: 1 },
    { conditionName: "Good", conditionId: 2 },
    { conditionName: "used-in a good condition", conditionId: 3 }
   
];

const dataLivingAreas = [
    { livingAreaName: "Center", livingAreaId: 1 },
    { livingAreaName: "North", livingAreaId: 2 },
    { livingAreaName: "Jerusalem", livingAreaId: 3 },
    { livingAreaName: "South", livingAreaId: 4 },
    { livingAreaName: "West", livingAreaId: 5 },

];

export { dataLivingAreas, dataConditions, dataSubCategorys, dataCategoriess, categorys};
