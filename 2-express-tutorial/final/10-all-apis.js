const express = require("express");
const app = express();
let { people } = require("./data");

// middleware for static files
app.use(express.static("./methods-public"));
// parse form data from post request
app.use(express.urlencoded({ extended: false }));
// parse json data from post request
app.use(express.json());

// Traditional or Main Login Page Request
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Pls provide name");
});

// GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// REST API kind of POST request
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(401).json({ success: false, msg: "Pls provide name" });
});

// PUT
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(id, name);
  res.send("DONE");
});

// DELETE
app.delete("api/people/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  res.send("Deleted");
});

app.listen(5000, () => {
  console.log("Node Server is running on port 5000");
});
