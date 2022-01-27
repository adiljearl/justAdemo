const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const Handlebars = require("handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const upload = require("express-fileupload");
const { mongoDbUrl } = require("./config/config");
const { select, generateTime } = require("./helpers/handlebars-helpers");
const passport = require("passport");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDbUrl)
  .then(db => {
    console.log("MONGO CONNECTED");
  })
  .catch(error => console.log("not connected"));

const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars);
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());

app.engine(
  "handlebars",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: { generateTime: generateTime }
  })
);
//body Parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload());
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));

const home = require("./routes/home/index");
const admin = require("./routes/admin/index");
const post = require("./routes/post/index");
const login = require("./routes/login/index");
const posts = require("./routes/admin/posts");
const profile = require("./routes/admin/profile");

app.use("/", home);
app.use("/admin", admin);
app.use("/post", post);
app.use("/login", login);
app.use("/admin/posts", posts);
app.use("/admin/profile", profile);

app.listen(5000, () => {
  console.log("working !!!");
});
