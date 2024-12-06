// built in module
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!\\\n");
  }, 1000);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
