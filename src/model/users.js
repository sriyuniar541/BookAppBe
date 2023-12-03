const Pool = require("./../config/db");

const create = (data) => {
    const {id,email,password,fullname,role,otp} = data
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO users(id,email,password,fullname,verif,otp) VALUES('${id}','${email}','${password}','${fullname}',0,${otp})`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
}

const findEmail = (email) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM users where email='${email}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const verification = (email) => {
    return new Promise((resolve, reject) => 
    Pool.query(`UPDATE users SET verif=1 WHERE email ='${email}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const getUserId = (id) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM users WHERE id = '${id}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}



module.exports = {create,findEmail,getUserId,verification}