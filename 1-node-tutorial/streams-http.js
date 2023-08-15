const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/test2.txt", "utf8");
    // res.end(text);
    const stream = fs.createReadStream("./content/test2.txt", "utf-8");
    stream.on("open", () => {
      stream.pipe(res);
    });
    stream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
