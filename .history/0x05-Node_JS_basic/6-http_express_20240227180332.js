const express = require('express');

/**
 * @author Graham S. Paul
 * Creating a small HTTP server using express
 * Should display "Hello Holberton School!" in the
 * page body for end point '/' 
 */
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
