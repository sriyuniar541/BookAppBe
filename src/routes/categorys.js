const express = require('express')
const routerCategory = express.Router()
const {CategoryController} = require('./../controller/categorys')
const multer= require('multer')
const uploade = multer()
const {protect} = require('../middleware/auth') 

routerCategory.get('/',CategoryController.getProduct)
routerCategory.get('/:id',CategoryController.getProductById)
routerCategory.post('/',protect,uploade.array(''),CategoryController.insert)
routerCategory.put('/:id',protect,uploade.array(''),CategoryController.update)
routerCategory.delete('/:id',protect,CategoryController.delete)


module.exports = routerCategory 