// const app = require("express")();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// For all other resources that we arent serving
// it covers all the verbs of not found resources
app.all("*", (req, res) => {
  res.status(404).send("<h2>Not Found</h2>");
});

app.listen(5000, () => {
  console.log("Server is UP");
});
