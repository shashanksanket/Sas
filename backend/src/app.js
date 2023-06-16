const feathers = require('@feathersjs/feathers');
const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
const express = require('@feathersjs/express');
const app = express(feathers());

const configuration = require('@feathersjs/configuration');

// client.js

const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

// Create a Socket.io client instance
const socket = io('http://localhost:3000');

// Initialize a Feathers application

// Configure the Socket.io real-time API
app.configure(socketio(socket));

// Create a Feathers service for messages
const messages = app.service('messages');

// Listen for real-time events
messages.on('created', (message) => {
  console.log('Received message:', message);
  // Add your custom logic to handle the message
});

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');


const authentication = require('./authentication');


const sequelize = require('./sequelize');

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);

// app.configure(jwt());

// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);





module.exports = app;
