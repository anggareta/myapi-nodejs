const dbopr = require('./dbopr');

var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('', router);

router.use((req, res, next) => {
  console.log('middleware');
  next();
});

router.route('/').get((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("<h1>Hello World!</h1>");
});

router.route('/baca').get((req, res) => {
  dbopr.baca().then(result => {
    console.log('read ' + result[0].length + ' rows.');
    res.json(result[0]);
  });
});

router.route('/bacasatu/:id').get((req, res) => {
  dbopr.bacasatu(req.params.id).then(result => {
    console.log('get data id: ' + req.params.id + '.');
    res.json(result[0][0]);
  });
});

router.route('/tulis').post((req, res) => {
  let emp = { ...req.body }
  dbopr.tulis(emp).then(result => {
    console.log('insert new id: ' + result[0][0].id + '.');
    res.status(201).json(result[0][0]);
  });
});


const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
  console.log(`Server is running.., listen on ${PORT}`);
});
