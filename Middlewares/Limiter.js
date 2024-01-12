const rateLimit = require('express-rate-limit');

//set the time in minutes and number of requests in that time need to be limited
const time_in_minutes = 15;
const max_limit_of_requests = 1000;


//implemented rate limiter
const limiter = rateLimit({
  windowMs: time_in_minutes * 60 * 1000, 
  max: max_limit_of_requests, 
});

module.exports = {limiter};