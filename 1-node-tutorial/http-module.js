const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    // res.write("hello");
    // res.end();
    res.end(JSON.stringify({ data: "hey" }));
  } else {
    res.end(`<h1>OOPS Gooo AWAYYYY</h1>`);
  }
});

server.listen(5000);
 