const users = require('./users/users.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const messages = require('./messages/messages.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(authmanagement);
  app.configure(messages);
}