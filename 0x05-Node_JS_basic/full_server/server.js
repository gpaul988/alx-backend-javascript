import express from 'express';
import mapRoutes from './routes';

/**
 * @param {Express} app Express server.
 * Ties the route to appropriate handler in the
 * given application
 * @author Graham S. Paul <gpaul988@gmail.com>
 */
const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
