const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
const cheerio = require("cheerio");
const articlesController = require("./../controllers/articlesController");
const savedController = require("./../controllers/savedController");
db = require('./../models')

//  has slash prepended to everything here '/'
router.use("/api", apiRoutes);


router.route("/saved")
  .get(savedController.findAll)
  .post(savedController.create)
  .delete(savedController.remove)

router.route("/saved/:id")
  .get(savedController.findById)
  .post(savedController.create)
  .delete(savedController.remove);


router.get("/scrape", function (req, res) {
  axios.get("https://www.coindesk.com/").then(function (response) {
    var $ = cheerio.load(response.data);
    $("section.article-card-fh").each(function (i, element) {
      var result = {};
      result.title = $(this)
        .find("a")
        .text()
      result.img = $(this)
        .find("img")
        .attr("src");
      result.p = $(this)
        .find('p')
        .text()
      if (result.title && result.img && result.p) {
        db.Article.create(result)
          .then(function (dbArticle) {
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    });
    res.send("Scrape Complete")
  })
});



module.exports = router;