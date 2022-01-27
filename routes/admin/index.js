const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  //   res.send("this is working dude!!");
  res.render("admin/index");
});

module.exports = router;
