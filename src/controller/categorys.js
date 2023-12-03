const { response } = require('../middleware/common');
const  ModelCategory = require('../model/categorys')


const CategoryController = {
    update : (req,res,next) => {
        const {name} = req.body
        ModelCategory.updateDataCategory(req.params.id,name)
        .then(result => response(res,200,true,result.rows,'update category sukses'))
        .catch(err => response(res,401,false,err,'update category fail'))
    },
  
    delete : (req,res,next) => {
        ModelCategory.deleteDataCategory(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete category sukses'))
        .catch(err => response(res,401,false,err,'delete category fail'))
    },
    
    getProduct : (req,res,next) => {
        ModelCategory.selectDataCategory()
        .then(result => response(res,200,true,result.rows,'get category sukses'))
        .catch(err => response(res,401,false,err,'get category fail'))
    },

    getProductById : (req,res,next) => {
        ModelCategory.selectDataCategoryById(req.params.id)
        .then(result => response(res,200,true,result.rows,'get category sukses'))
        .catch(err => response(res,401,false,err,'get category fail'))
    },
    
     insert : (req,res,next) => {
        const {name} = req.body
        ModelCategory.insertDataCategory(name)
        .then(result => response(res,200,true,result.rows,'insert category sukses'))
        .catch(err => response(res,401,false,err.message,'insert category fail'))
    
    },
}

exports.CategoryController = CategoryController

