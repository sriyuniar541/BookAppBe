const Pool =require ('./../config/db')


 
  const selectDataDetail = (id) => {
    return Pool.query(
      `SELECT * FROM books JOIN category ON books.category_id = category.id WHERE books.id='${id}'`
    );
  };

const selectData = ({limit,offset,sort,sortby,search,page,searchMaxPage, searchMinPage}) => {
    return Pool.query(
      `SELECT * FROM  books INNER JOIN category ON books.category_id = category.id WHERE (books.title) ILIKE ('%${search}%') ORDER BY books.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
    );
  };





const insertData = (data) => {
  
  const {title,deskription,image_url,release_year,price,total_page,category_id,thickness} = data;
  console.log(data)
  return new Promise ((resolve,reject)=>
      Pool.query(`INSERT INTO books (title,deskription,image_url,release_year,price,total_page,thickness,category_id) VALUES ('${title}','${deskription}','${image_url}',${release_year},'${price}',${total_page},'${thickness}',${category_id})`,(err,result)=>{
          if(!err){
              resolve(result)
          } else {
            reject(err)
          }
      })
  )
}

const updateData = (id,data) => {
  const {title,deskription,image_url,release_year,price,total_page,category_id} = data;
  console.log(image_url)
  return new Promise ((resolve,reject)=>
      Pool.query(`UPDATE books SET title='${title}',deskription='${deskription}', image_url='${image_url}',release_year='${release_year}',price='${price}',total_page='${total_page}' , category_id='${category_id}' WHERE id='${id}'`,(err,result)=>{
          if(!err){
              resolve(result)
          } else {
              reject(err.message)
          }
      })
  )
}

const deleteData = id => {
    return Pool.query(`DELETE FROM books where id ='${id}'`);
}


module.exports = { insertData, deleteData,selectDataDetail, updateData,selectData} 
