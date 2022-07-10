var express = require("express");
var router = express.Router();

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
  res.send("POST the movie with the title => " + req.body.title);
});

/* PUT */
router.put("/:id", function (req, res, next) {
  res.send("PUT the movie => " + req.params.id);
});

/* DELETE */
router.delete("/:id", function (req, res, next) {
  res.send("DELETE the movie => " + req.params.id);
});

module.exports = router;
