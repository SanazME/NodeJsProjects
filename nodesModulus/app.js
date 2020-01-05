const validator = require('validator');

console.log(validator.isEmail('asf$@sfsdcom'))
console.log(validator.isURL('bbc.com', { require_valid_protocol: false }))



