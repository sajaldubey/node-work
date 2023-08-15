const { readFile, writeFile } = require("fs");
// ALTERNATE WAY - CONVERTS ASYNC FUNCTIONS TO PROMISES RETURNING ONES
// const { readFile, writeFile } = require("fs").promises

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

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
  const first = await readFilePromise("./content/test2.txt", "utf8");
  const second = await readFilePromise("./content/test3.txt", "utf8");
  await writeFilePromise(
    "./content/written.txt",
    `first - ${first} - second - ${second}`,
    "utf8"
  );
  console.log(first, second);
};

start().catch((err) => {
  console.log(err);
});
// const start = async function () {};
// async function start() {}
