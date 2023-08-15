const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

// middleware for static files
app.use(express.static("./methods-public"));
// parse form data from post request
app.use(express.urlencoded({ extended: false }));
// parse json data from post request
app.use(express.json());
// ROUTERS
app.use("/api/people", people); // everything starting with BaseRoute will be redirected to Router
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Node Server is running on port 5000");
});
