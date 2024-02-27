const express = require('express');

const app = express();
const port = 1245;

/**
 * @author Graham S. Paul
 * Creating a small HTTP server using express
 * Should display "Hello Holberton School!" in the
 * page body for end point '/' 
 */
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
