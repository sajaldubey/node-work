const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://heysajal:lAzuWt8B85bvtGag@tomato-cluster.xb9xwdj.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB...");
  })
  .catch((err) => {
    console.log(err);
  });
