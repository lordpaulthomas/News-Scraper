const express = require("express");
const mongoose = require("mongoose");
const db = require("./models")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const axios = require('axios');
const cheerio = require('cheerio');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.connect(
  process.env.DB_URI || "mongodb://localhost/news-scraper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`)
})