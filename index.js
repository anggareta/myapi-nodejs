const express = require("express");
const PORT = process.env.PORT || 3000;

var app = express();

app.get('/', function (req, res) {
  //res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");

  res.send("<h1>Hello World!</h1>");
});

var server = app.listen(PORT, function () {
  console.log(`Server is running.., listen on ${PORT}`);
});