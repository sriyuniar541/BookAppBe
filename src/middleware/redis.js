/* eslint-disable no-undef */
const client = require('../config/redis')
const { response } = require('./common')

const hitCache = async(req,res,next) =>{
    const id = req.params.id
    const product = await client.get(`product/${id}`)
    if(product) {
        console.log('product',product)
        return response(res,200,true,JSON.parse(product),'get data sukses')   
    }
    next()
}

const clearCache = async(req,res,next) => {
    const id = req.params.id
    client.del(`product/${id}`)
    next()
}

module.exports = {hitCache,clearCache}

