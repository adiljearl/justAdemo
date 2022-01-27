const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

router.all("/*", (req, res, next) => {
  res.app.locals.layout = "home";
  next();
});

router.get("/", (req, res) => {
  //   res.send("this is working dude!!");
  res.render("home/index");
});
router.get("/world", (req, res) => {
  Post.find({ label: "World" }).then(posts => {
    res.render("home/world", { posts: posts });
  });
  // res.render("home/world");
});
router.get("/aygul", (req, res) => {
  Post.find({ label: "Aygul" }).then(posts => {
    res.render("home/aygul", { posts: posts });
  });
  // res.render("home/aygul");
});
router.get("/bala", (req, res) => {
  Post.find({ label: "Bala" }).then(posts => {
    res.render("home/bala", { posts: posts });
  });
  // res.render("home/bala");
});
router.get("/gonca", (req, res) => {
  Post.find({ label: "Gonca" }).then(posts => {
    res.render("home/gonca", { posts: posts });
  });
  // res.render("home/gonca");
});
router.get("/halima", (req, res) => {
  Post.find({ label: "Halima" }).then(posts => {
    res.render("home/halima", { posts: posts });
  });
  // res.render("home/halima");
});
router.get("/malhun", (req, res) => {
  Post.find({ label: "Malhun" }).then(posts => {
    res.render("home/malhun", { posts: posts });
  });
  // res.render("home/malhun");
});
router.get("/selcan", (req, res) => {
  Post.find({ label: "Selcan" }).then(posts => {
    res.render("home/selcan", { posts: posts });
  });
  // res.render("home/selcan");
});
router.get("/aslihan", (req, res) => {
  Post.find({ label: "Aslihan" }).then(posts => {
    res.render("home/aslihan", { posts: posts });
  });
  // res.render("home/aslihan");
});

module.exports = router;
