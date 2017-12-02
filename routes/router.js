// Set everything up
const express = require('express');
const router = express.Router();
const path = require('path');
const { Client } = require('pg');
const client = new Client({
    // replace this if the credentials change, then push to master
  connectionString: 'postgres://qovnnpgvwxzyrq:fcc5ab45891c3ec93f7c3248a993877ee355cfc16ccb785cb29927771c31d8be@ec2-174-129-15-251.compute-1.amazonaws.com:5432/dahe59g5ccfl76',
  ssl: true,
});
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

    // uncomment sample query below

    // client.query('SELECT * FROM country;', (err, res) => {
    //   console.log("here");
    //   if (err) throw err;
    //   for (let row of res.rows) {
    //     console.log(JSON.stringify(row));
    //   }
    //   client.end();
    // });

    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

/* GET home page. */
router.get('/country-vs-athlete', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'country-vs-athlete.html'));
});


// /* GET about us. */
router.get('/data', function(req, res, next) {
    console.log("in about us");

    // uncomment sample query below

    var query = 'SELECT * FROM country;';

    client.query(query, function(err, rows, fields) {
        if (err) console.log(err);
        else {
            // sending the studd that we queried
            res.json(rows);
            //client.end();
        }
    });
});









module.exports = router;
