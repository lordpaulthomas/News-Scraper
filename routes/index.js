const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
const cheerio = require("cheerio");

db = require('./../models')


//  has slash prepended to everything here '/'
router.use("/api", apiRoutes);




router.get("/scrape", function (req, res) {
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
      if(result.title && result.img && result.p){
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        })
      }
    });
    res.send("Scrape Complete")
  })
});

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;