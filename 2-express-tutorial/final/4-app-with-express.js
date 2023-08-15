const express = require("express");
const path = require("path");

const app = express();

// setting up static & middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
  // adding to static assets
  // Server Side Rendering - Templating Engines
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found!!!");
});

app.listen(5000, () => {
  console.log("Server is up on 5000...");
});
