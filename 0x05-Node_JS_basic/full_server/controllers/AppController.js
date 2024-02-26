/**
 * Miscellaneous route handlers.
 * @author Graham S. Paul <gpaul988@gmail.com>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
