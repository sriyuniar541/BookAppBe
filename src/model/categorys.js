const Pool = require('./../config/db')

const selectDataCategory = () => {
    return Pool.query(`SELECT * FROM category ORDER BY id DESC LIMIT 10`);
}

const selectDataCategoryById = (id) => {
    return Pool.query(`SELECT * FROM category WHERE id='${id}'`);
}

const insertDataCategory = (data) => {
    return Pool.query(`INSERT INTO category(name) VALUES ('${data}')`);
}

const updateDataCategory = (id, data) => {
    return Pool.query(`UPDATE category SET name='${data}' WHERE id='${id}'`);
}

const deleteDataCategory = (id) => {
    return Pool.query(`DELETE FROM category where id ='${id}'`);
}

module.exports = {
    selectDataCategory, selectDataCategoryById, insertDataCategory, deleteDataCategory, updateDataCategory
}