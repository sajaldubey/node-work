const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// SYNC / BLOCKING APPROACH

// ASYNC / NON-BLOCKING APPROACH
readFile("./content/test2.txt", "utf8", (err, res) => {
  if (err) {
    return;
  }
  const test2 = res;
  readFile("./content/test3.txt", "utf8", (err, res) => {
    if (err) {
      return;
    }
    const test3 = res;
    writeFile(
      "./content/written.txt",
      `Hey this is new file: ${test2} - ${test3}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
    console.log(`${test2} - ${test3}`);
  });
});
