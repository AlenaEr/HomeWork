const express = require('express');
const http = require('node:http');

const app = express();
const server = http.createServer(app);
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  const delay = Math.floor(Math.random() * 3) + 1;
  console.log("start");
  const isError = Math.random() < 0.5;
  setTimeout(() => {
    console.log("Inside setTimeout");
    console.log(`Delay = ${delay}`);
    if (isError) {
      res.status(500).render('500', { delay });
    } else {
      res.send('Hello from server');
    }
  }, delay * 1000);
});

app.use((err, req, res, next) => {
  res.status(500).render('500', { delay: 'unknown'});
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
