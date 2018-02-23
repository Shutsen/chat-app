var moment = require('moment');

// Jan 1st 1970 00:00:00 ENAMETOOLONG

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar'];
// console.log(date.getMonth());

// var date = moment();
// date.add(111, 'year').subtract(4, 'month');
// console.log(date.format('MMM Do YYYY HH:mm:ss'));

// console.log(moment().format('h:mm a'));

// var createdAt = 12345;
// var date = moment(createdAt);
// console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(moment(someTimeStamp).format('MMM Do YYYY HH:mm:ss'));