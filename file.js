const http = require("http");
const fs = require("fs");
const { type } = require("os");

//for getting the files of the timestamp in a particular folder
const server = http.createServer((req, res) => {
  let data = fs.readFileSync("./downloads/sample.txt", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(5000, () => {
  console.log("sever is running on 5000");
});