const _ = require('lodash');


let localConfig;

try {
  localConfig = require('./config.local.js');
} catch(e) {}


const defaultConfig = {
  MONGODB_HOST: 'mongodb://localhost:27017/triggered',
  MONGOOSE_URL: 'mongodb://localhost:27017/triggered',
  SESSION_SECRET: 'big_secret',
  db: {
    host: 'localhost',
    port: 27017,
    name: 'triggered'
  },
  baseHref: null,
};

module.exports = _.merge(defaultConfig, localConfig);
