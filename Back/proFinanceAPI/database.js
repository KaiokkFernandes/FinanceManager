// database.js
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    database: 'dbfinance', 
    password : 'muleta9090'
});

export default pool.promise();
