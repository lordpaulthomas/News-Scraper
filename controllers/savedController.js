const db = require('./../models')

module.exports = {
  findAll: function (req, res) {
    db.Saved
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Saved
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {  
    console.log(req.body.body)
    const newThing = {
      "p": req.body.body.p,
      "img": req.body.body.img,
      "title": req.body.body.title
    };
    console.log(newThing)

    db.Saved.create(newThing)
      .then(function(dbSaved) {
        console.log(dbSaved)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  update: function (req, res) {
    db.Saved
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Saved
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.delete())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deleteAll: function (req, res) {
    db.Saved
      .deleteMany({}, function(err){console.log(err)})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}