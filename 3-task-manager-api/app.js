const express = require("express");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const app = express();
require("dotenv").config();
// used when direct function is being called in a file which is being required
// require("./db/connect");
const connectDB = require("./db/connect");
const port = 3000;

// MIDDLEWARES
app.use(express.static("./public"));
app.use(express.json());

// ROUTES
app.use("/api/v1/tasks", tasks);
// Mounting Default Routing Middleware
// This middleware function will be called whenever a request is made
// to a route that is not specified in your application.
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB ...");
    app.listen(port, () => {
      console.log(`Server is running on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
