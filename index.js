const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage", { name: "Wakati" });
});

app.listen(3000, () => {
  console.log("Server fired up 🔥");
});
