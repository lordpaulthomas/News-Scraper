const express = require("express");
const mongoose = require("mongoose");
const db = require("./models")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(expres.static("client/build"));
}

app.use(routes);



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/news-scraper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/scrape", function (req, res) {
  axios.get("https://www.coindesk.com/").then(function (response) {
    var $ = cheerio.load(response.data);
    $("a").each(function (i, element) {
      var result = {};
      result.title = $(this)
        .find("h3")
        .text();
      result.img = $(this)
        .find('img')
        .attr("src");
      result.p = $(this)
        .find('p')
        .text()
      
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        })
    });
    res.send("Scrape Complete")
  })
})


app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`)
})