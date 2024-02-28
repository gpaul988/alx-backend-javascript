import mapRoutes from './routes';
import express from 'express';

const PORT = 1245;
const app = express();

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;