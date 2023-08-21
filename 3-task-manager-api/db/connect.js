const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// SERVER & MONGO CONNECTION NOT IN SYNC

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to DB...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
