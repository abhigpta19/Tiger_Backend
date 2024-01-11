const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Define routes
app.use('/api/v1/posts', require('./routes/posts.js'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
