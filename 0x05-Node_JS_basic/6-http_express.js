const express = require('express');

/**
 * Create small HTTP server using Express
 * Creates small HTTP server using Express module
 * @author Graham S. Paul <gpaul988@gmail.com>
 */
const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;