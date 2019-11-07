var axios = require("axios")
var cheerio = require("cheerio")
var mongojs = require('mongojs');
var databaseUrl = 'news-scraper';
var collections = ["articles"];

var db = require("./../models")

var Scrape = function () {
    return (
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
      })
    )
  }

export default Scrape