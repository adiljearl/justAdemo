const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "post";
  next();
});

router.get("/:id", (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    console.log(post.title);
    res.render("post/index", { post: post });
  });
  //   res.send("single Post Route Working !");
});

module.exports = router;
