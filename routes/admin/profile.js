const express = require("express");
const router = express.Router();

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "admin";
  next();
});

router.get("/viewProfile", (req, res) => {
  //   res.send("Profile Route !");
  res.render("admin/profile/viewProfile");
});

router.get("/editProfile", (req, res) => {
  //   res.send("Profile Route !");
  res.render("admin/profile/editProfile");
});

module.exports = router;
