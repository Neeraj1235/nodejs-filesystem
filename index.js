const http = require("http");
const fs = require("fs");
const { type } = require("os");

//for getting the current timestamp
const server = http.createServer((req, res) => {
  //writing file
  let date = new Date();
  let timeStamp = date.getTime();
  fs.writeFileSync(`${timeStamp}.txt`, `${date}`, "utf-8");
  let data = fs.readFileSync(`${timeStamp}.txt`, "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`${data}`);
});

server.listen(5000, () => {
  console.log("sever is running on 5000");
});


  