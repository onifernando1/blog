var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// POST
router.post("/", (req, res) => {
  return res.send("POST");
});

//PUT
router.put("/postId", (req, res) => {
  return res.send("PUT");
});

//DELETE
router.delete("/postId", (req, res) => {
  return res.send("DELETE");
});

module.exports = router;
