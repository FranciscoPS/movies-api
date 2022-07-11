var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Movie = require("../models/Movie");

/* GET movies listing. */
router.get("/", (req, res, next) => {
  //Indicamos que se ordene Decrecientemente por año
  Movie.find()
    .sort("-year")
    .exec((err, movies) => {
      err ? res.status(500).send(err) : res.status(200).json(movies);
    });
});

/* GET the movie identified by id. */
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id, (err, movies) => {
    err ? res.status(500).send(err) : res.status(200).json(movies);
  });
});

/* POST */
router.post("/", (req, res, next) => {
  Movie.create(req.body, (err, movieInfo) => {
    err ? res.status(500).send(err) : res.sendStatus(200);
  });
});

/* PUT */
router.put("/:id", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, (err, movieInfo) => {
    err ? res.status(500).send(err) : res.sendStatus(200);
  });
});

/* DELETE */
router.delete("/:id", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id, req.body, (err, movieInfo) => {
    err ? res.status(500).send(err) : res.sendStatus(200);
  });
});

module.exports = router;
