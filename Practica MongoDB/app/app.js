const express = require("express");
const bodyparser = require("body-parser");
const {
  rutasprueba
} = require("./routes");
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,token_public_conekta"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );

  next();
});

app.use("/NutriNET/Cliente/", rutasprueba);


module.exports = app;
