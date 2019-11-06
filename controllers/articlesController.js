const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Article
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
    .findById({ _id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  }
}