const crypto = require('hypercore-crypto');
const exec = require('../index.js').exec;

global.kp = crypto.keyPair();

//expose a remote executor
exec(kp, 'exec')
require('./service.js')
require('./client.js')