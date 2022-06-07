/*const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password:'',
  database:'mydb'
})

export function connexion(){
  connection.connect();
  connection.query("select * from groupes", function(error, results){
    console.log("query response is ",results)
  })
  connection.end();
}
*/
import {mysql} from 'mysql'

function connexion(){
  console.log("test");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
  console.log("test");
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});}