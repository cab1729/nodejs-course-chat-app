var moment = require('moment');

var createdAt = Date.now();
var date = moment(createdAt);

console.log(date.format('h:mm a'));
