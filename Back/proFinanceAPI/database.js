const mysql = require('mysql2'); 

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    database: 'dbfinance', 
    password : 'muleta9090'
}); // criando pool e conexão com o banco de dados  


module.exports = pool.promise(); // exportando o pool para ser utilizado em outros arquivos     

