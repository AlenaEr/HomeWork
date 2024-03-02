const http = require("node:http");

const server = http.createServer();

server.on("request", (req, res) => {
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

server.on("listening", () => {
  console.log("Server is running on http://localhost:3000");
  http.get(
    {
      host: "127.0.0.1",
      port: 3000,
    },
    (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        console.log(data);
      });
    }
  );
});
server.listen(3000);
