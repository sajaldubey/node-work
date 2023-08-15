// PROMISE WAY OF READING FILE ASYNC

const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/test2.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(`Eror is ${e}`);
  });
