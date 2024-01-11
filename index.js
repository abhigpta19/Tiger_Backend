const express = require('express');
const {limiter} = require('./Middlewares/Limiter')
const app = express();
const PORT = process.env.PORT || 3000;

//for parsing through the json file
app.use(express.json());
//to limit number of request from particualr IP and we can change the amount of request and time from Middleware --> Limiter.js
app.use(limiter);

// Define routes
app.use('/api/v1/posts', require('./routes/posts.js'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
