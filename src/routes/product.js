
const express = require('express')
const router = express.Router()
const {ProductController} = require('./../controller/product')
const {protect} = require('../middleware/auth') 
const upload  = require('../middleware/upload') 
//const upload  = require('../middleware/upload') 
//const {hitCache,clearCache} = require('../middleware/redis') 

 
router.get("/",ProductController.getProduct);
router.get("/:id",ProductController.getProductDetail);
router.post("/",upload.single('image_url'), ProductController.insert)
router.put('/:id',protect,upload.single('image_url'),ProductController.updateProduct)
router.delete('/:id',protect,ProductController.delete)



module.exports = router 