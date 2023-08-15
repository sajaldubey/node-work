const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is UP");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello /</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello About</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Hello 404</h1>");
  }
});

server.listen(5000);
