const express = require("express");
const app = express();
const auth = require("./authorize");
const logger = require("./logger");

// req => middleware => res

app.use([logger, auth]);

// MIDDLE WARE
app.get("/", (req, res) => {
  console.log(req.user);
  return res.send("Home");
});

app.get("/about", (req, res) => {
  return res.send("About");
});

app.listen(5000, () => {
  console.log("Server is running");
});
