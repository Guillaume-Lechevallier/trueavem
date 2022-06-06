const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password:'',
  database:'mydb'
})

  connection.connect();
  connection.query("select * from groupes", function(error, results){
    console.log("query response is ",results)
  })
  connection.end();

