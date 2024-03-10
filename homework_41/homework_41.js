const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "my_secret_key";

let refreshTokens = [];

app.post("/login", (req, res) => {
  const tokenA = jwt.sign({ username: req.body.username }, secretKey, {
    expiresIn: "20m",
  });
  const tokenB = jwt.sign({ username: req.body.username }, secretKey);
  refreshTokens.push(tokenB);
  res.json({ tokenA, tokenB });
});

app.post("/refresh-token", (req, res) => {
  const refreshToken = req.body.tokenB;

  if (!refreshToken) return res.sendStatus(401);

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, secretKey, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const newTokenA = jwt.sign({ username: decoded.username }, secretKey, {
      expiresIn: "20m",
    });

    res.json({ newTokenA });
  });
});

app.get("/path", verifyTokenA, (req, res) => {
  res.json({ message: "Access granted" });
});

function verifyTokenA(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
}
app.listen(3000, () => console.log("Server started on port 3000"));
