const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
require("./db/connect");

const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks/", tasks);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
