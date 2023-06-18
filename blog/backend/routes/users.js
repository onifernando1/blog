var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//Sign up routes

router.get("/signup", userController.user_create_get);

router.post("/signup", userController.user_create_post);

router.get("/login", userController.user_login_get);

router.post("/login", userController.user_login_post);

router.delete("/logout", userController.user_logout);

router.get("/detail", userController.user_detail);

module.exports = router;
