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

const start = async () => {
  const first = await getText("./content/test2.txt");
  const second = await getText("./content/test3.txt");

  console.log(first, second);
};

start().catch((err) => {
  console.log(err);
});
// const start = async function () {};
// async function start() {}
