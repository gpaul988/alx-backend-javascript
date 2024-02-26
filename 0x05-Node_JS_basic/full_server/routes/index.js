import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * @param {Express} app Express application.
 * Ties the route to appropriate handler in the
 * given application
 * @author Graham S. Paul <gpaul988@gmail.com>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;