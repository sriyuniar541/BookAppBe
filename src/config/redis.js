/* eslint-disable no-unused-vars */

const {createClient} = require('redis')
const client = createClient(6379)
client.on('error',(err) => console.log('Redis Client Eror'))
client.connect()

module.exports = client
