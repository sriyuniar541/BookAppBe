
const { Pool } = require(`pg`);
require(`dotenv`).config();

const pool = new Pool ({
        user : process.env.DB_USER,
        host : process.env.DB_HOST,
        database :process.env.DB_DATABASE,
        password :process.env.DB_PASS,
        port : process.env.DB_PORT
})

pool.connect((err) => {
  if (err) {
    console.log('<:: PostgreSQL Client Error', err);
  } else {
    console.log(`::> PostgreSQL Client Connected books_app`);
  }
});

module.exports = pool;





