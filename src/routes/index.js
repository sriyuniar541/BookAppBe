/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const UsersRouter = require('../routes/users')
const ProductRouter = require('../routes/product')
const CategoryRouter = require('../routes/categorys')

router
.use('/users',UsersRouter)
.use('/books',ProductRouter)
.use('/category',CategoryRouter)


module.exports = router
