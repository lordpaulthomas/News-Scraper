import axios from "axios";
import cheerio from "cheerio";
import mongojs from "mongojs";
var databaseUrl = 'news-scraper';
var collections = ["articles"]
var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
  console.log("Database Error", error)
})


export default {
  getArticles: function () {
    return axios.get("/api/articles")
  },
  deleteArticle: function (id) {
    return axios.delete('/api/articles/' + id)
  },
  deleteAllArticles: function () {
    return axios.delete('/api/articles')
  },
  scrapeArticles: function() {
    return axios.get("/scrape")
  }
}