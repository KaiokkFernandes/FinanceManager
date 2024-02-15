const mysql = require('mysql2'); 

const pool = mysql.createPool({
    host: 'localhost', 
    port : 3306,   
    user: 'root',
    database: 'profinance', 
    password : 'muleta9090'
}); // criando pool e conexão com o banco de dados  


module.exports = pool.promise(); // exportando o pool para ser utilizado em outros arquivos     

