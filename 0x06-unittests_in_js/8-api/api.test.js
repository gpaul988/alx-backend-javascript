const { expect } = require('chai');
const request = require('request');

/**
 * API integration test
 * @returns {undefined}
 * @example GET / returns correct response
 * @author Graham S. Paul
 */
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
