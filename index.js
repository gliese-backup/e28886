const express = require("express");

const app = express();
app.set("view engine", "ejs"); // Setting ejs for templates
app.use(express.static("public")); // Adding public dir

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(3000, () => {
  console.log("Server fired up 🔥");
});
