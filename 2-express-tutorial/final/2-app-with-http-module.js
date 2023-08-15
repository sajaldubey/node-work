const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("../navbar-app/index.html");
const jscontent = readFileSync("../navbar-app/browser-app.js");
const logo = readFileSync("../navbar-app/logo.svg");
const style = readFileSync("../navbar-app/styles.css");

const server = http.createServer((req, res) => {
  //   console.log("Server is UP");
  const url = req.url;
  console.log(url);
  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homepage);
  }
  // CSS
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(style);
  }
  // LOGO
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.end(logo);
  }
  // JavaScript
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(jscontent);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Hello 404</h1>");
  }
});

server.listen(5000);
