const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "login";
  next();
});

router.get("/", (req, res) => {
  // res.send("login Page is so sexy !");
  res.render("login");
});

module.exports = router;
