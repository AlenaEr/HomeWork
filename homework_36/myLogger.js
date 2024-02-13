require('dotenv').config();
const logger = require('./app');

const local = process.env.NODE_ENV_LOCAL
const dev = process.env.NODE_ENV_DEV
const prod = process.env.NODE_ENV_PROD

console.log(logger(local,'Critical'));
console.log(logger(dev,'Critical'));
console.log(logger(prod,'Critical'));

