const logger = require('./app');

console.log(logger('LOCAL','Critical'));
console.log(logger('DEV','Critical'));
console.log(logger('PROD','Critical'));
console.log(logger('LOCAL','Emergency'));
console.log(logger('DEV','Emergency'));
console.log(logger('PROD','Emergency'));
