const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create)
  .delete(articlesController.deleteAll)
  
router  
  .route("/:id")
  .get(articlesController.findById)
  .post(articlesController.saveArticle)
  .delete(articlesController.remove);
  
module.exports = router;