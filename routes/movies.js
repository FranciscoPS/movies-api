var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var Movie = require("../models/Movie");

/* GET movies listing. */
router.get("/", function (req, res, next) {
  res.send("GET all movies");
});

/* GET the movie identified by id. */
router.get("/:id", function (req, res, next) {
  res.send("GET the movie => " + req.params.id);
});

/* POST */
router.post("/", function (req, res, next) {
  //Utilizamos el modelo que creamos, el create es equivalente a POST
  Movie.create(req.body, function (err, movieInfo) {
    err ? res.status(500).send(err) : res.sendStatus(200);
  });
});

/* PUT */
router.put("/:id", function (req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function (err, movieInfo) {
    err ? res.status(500).send(err) : res.sendStatus(200);
  });
});

/* DELETE */
router.delete("/:id", function (req, res, next) {
  res.send("DELETE the movie => " + req.params.id);
});

module.exports = router;
