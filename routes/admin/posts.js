const express = require("express");
const router = express.Router();
const { isEmpty } = require("../../helpers/upload-helper");
const Post = require("../../models/Post");
router.all("/*", (req, res, next) => {
  res.app.locals.layout = "admin";
  next();
});

router.get("/create", (req, res, next) => {
  // res.send("create route");
  res.render("admin/posts/create");
});

router.get("/edit/:id", (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render("admin/posts/edit", { post: post });
  });
});

router.get("/allPosts", (req, res) => {
  // res.send("create route");
  Post.find().then(posts => {
    res.render("admin/posts/allPost", { posts: posts });
  });
});

router.post("/create", (req, res, next) => {
  let file;
  let filename;
  if (!isEmpty(req.files)) {
    file = req.files.file;
    filename = Date.now() + file.name;

    let dirUploads = "./public/uploads/";

    file.mv(dirUploads + filename, err => {
      if (err) throw err;
    });
  }
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    file: filename,
    label: req.body.label
  });

  // console.log(req.body.title);
  newPost.save().then(savedPost => {
    console.log("savedPost");
  });
  res.redirect("/admin/posts/allPosts");
});
router.put("/edit/:id", (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    if (!isEmpty(req.files)) {
      file = req.files.file;
      filename = Date.now() + file.name;

      let dirUploads = "./public/uploads/";

      file.mv(dirUploads + filename, err => {
        if (err) throw err;
      });
      post.file = filename;
    }
    post.body = req.body.body;
    post.title = req.body.title;
    post.label = req.body.label;
    post.save();
    res.redirect("/admin/posts/allPosts");
  });
});

router.delete("/:id", (req, res) => {
  Post.remove({ _id: req.params.id }).then(result => {
    res.redirect("/admin/posts/allPosts");
  });
});

module.exports = router;
