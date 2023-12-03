const express = require('express')
var bodyParser = require ('body-parser')
const morgan = require ('morgan');
const cors = require('cors');
require('dotenv').config(); 
const mainRouter = require ('./src/routes/index')
const { response } = require('./src/middleware/common');
const helmet = require ('helmet')
const xss = require('xss-clean')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(morgan('dev'))
app.use(cors())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'})) 
app.use(xss())

//main router
app.use('/',mainRouter)
app.use('/img',express.static('./upload'))

app.all('*', (req,res,next) => {
    response (res,404,false,'404 not found')  
})


app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
