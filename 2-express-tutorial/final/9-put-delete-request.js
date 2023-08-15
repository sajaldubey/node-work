const express = require("express");
const app = express();

let { people } = require("./data");

// static files
app.use(express.static("./methods-public"));

// parse form data from post request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Traditional
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// REST API kind of Post request

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(401).json({ success: false, msg: "Pls provide name" });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Pls provide name");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  console.log(id, name);

  res.send("DONE");
});

app.delete("api/people/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  res.send("Deleted");
});

app.listen(5000, () => {
  console.log("Node Server is running on port 5000");
});
