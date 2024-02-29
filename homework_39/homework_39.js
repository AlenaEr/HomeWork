const http = require("node:http");

http.get(
  {
    host: "127.0.0.1",
    port: 3000,
  },
  (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  }
);

const server = http.createServer((req, res) => {
  const delay = Math.floor(Math.random() * 3) + 1;
  console.log("start");
  const isError = Math.random() < 0.1;
  setTimeout(() => {
      console.log("Inside setTimeout");
      console.log(`Delay = ${delay}`);
    if (isError) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Internal server error");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello from server");
    }
  }, delay * 1000);
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
