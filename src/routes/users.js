const express = require('express')
const router = express.Router()
const {UsersController}= require('./../controller/users')
const multer= require('multer')
const uploade = multer()


router.post('/register',uploade.array(''),UsersController.insert)
router.post('/login',uploade.array(''),UsersController.login)
router.post('/email/otp',uploade.array(''),UsersController.otp)
router.get('/:id',UsersController.getUser) 




module.exports = router