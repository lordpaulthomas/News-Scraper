import axios from "axios";
import cheerio from "cheerio";


export default {
  getArticles: function () {
    return axios.get("/api/articles")
  },
  deleteArticle: function (id) {
    return axios.get('/api/articles/' + id)
  }
}