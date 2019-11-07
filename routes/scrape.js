const path = require("path");
const router = require("express").Router();
const scrapeRoutes = require("./scrape");

router.use("/scrape", scrapeRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;