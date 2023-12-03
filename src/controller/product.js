const { response } = require('../middleware/common'); 
const  ModelProduct = require('./../model/product'); 
const Pool = require ('./../config/db'); 
// const client = require ('../config/redis'); //redis
const cloudinary = require('../config/cloudinary');



const ProductController = {
    updateProduct : async (req,res,next) => {
        try{
          const {title,deskription,image_url,release_year,price,total_page,category_id} = req.body
        
          const data = {
            title ,
            deskription,
            release_year  : parseInt(release_year) ,
            price,
            total_page : parseInt(total_page) ,
            category_id : parseInt(category_id) 
          }
      
          if (req.file) {
            const image = await cloudinary.uploader.upload(req.file.path, {
              folder: 'belanja'
            });
    
            data.image_url = image.url;
          } 

            const result = await ModelProduct.updateData(req.params.id,data)
            response(res,200,true,result.rows,'update product success')
        } catch (err) {
            response(res,404,err.message,'update product fail ')
        }
    },
    
    delete : (req,res,next) => {
        ModelProduct.deleteData(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },

    getProduct: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 
        const limit = Number(req.query.limit) || 5  
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "id" 
        const sort = req.query.sortByTitle || "ASC"
        const search = req.query.title || ''
        const searchMaxPage = req.query.maxPage || 222
        const searchMinPage = req.query.minPage || 0
        const result = await ModelProduct.selectData({limit,offset,sort,sortby,search,page,searchMaxPage, searchMinPage })
        response(res, 200, true, result.rows, "get data books success")
        } 
        catch(err){
          console.log(err)
          response(res, 404, false, err.message, "get data fail");
        }},

    

    getProductDetail: (req, res, next) => {
        ModelProduct.selectDataDetail(req.params.id) 
        .then((result) => {
        // client.setEx(`product/${req.params.id}`,60*60,JSON.stringify(result.rows)) 
        response(res, 200, true, result.rows, "get data success")
        })  
        },
    

    insert : async (req,res,next) => {
      try{

        const {title,deskription,release_year,price,total_page,category_id} = req.body
        
        const data = {
          title ,
          deskription,
          release_year  : parseInt(release_year) ,
          price,
          total_page : parseInt(total_page) ,
          category_id : parseInt(category_id) 
        }

        //validasi tebal buku
        if(total_page <= 100 ) {
          data.thickness = 'Tipis'
        } if(total_page >100 && total_page <= 200 ) {
          data.thickness = 'Sedang'
        } if(total_page >= 201 ) {
          data.thickness = 'Tebal'
        }
        
        //validasi tahun release
        if (data.release_year < 1980 ) {
          return response(res, 404, false,null, 'Minimal tahun release 1980')
        } 
        else if (data.release_year > 2021 ) {
          return response(res, 404, false,null, 'Maksimal tahun release 2021')
        }

        //validasi foto
          if (req.file) {
              const image = await cloudinary.uploader.upload(req.file.path, {
                folder: 'belanja'
              });
      
              data.image_url = image.url;
            } 
           
          const result = await ModelProduct.insertData(data)
      
          response(res,200,true,result.rows,'insert product success')
      } catch (err) {
          response(res,404,err.message,'insert product fail ')
      }
  },
}


exports.ProductController = ProductController

