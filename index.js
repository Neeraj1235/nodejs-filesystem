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

//for getting the files of the timestamp in a particular folder
const server1 = http.createServer((req, res) => {
  let data = fs.readFileSync("./downloads/sample.txt", "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(5000, () => {
  console.log("sever is running on 5000");
});


  