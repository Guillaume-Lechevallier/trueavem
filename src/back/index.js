const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'SLBDm027I0',
    user     : 'tel_usr',
    password : '-JnCmfH69YGzONRfVMA6',
    database : 'telephonie'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
