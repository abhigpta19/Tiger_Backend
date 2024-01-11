const express = require('express');
const router = express.Router();
const { createPost, getPostAnalysis } = require('../controllers/posts');

// The creation of post is implemented in the createPost function
router.post('/', createPost);

// The Analysis of the post is implemented in getPostAnalysis function
router.get('/:id/analysis', getPostAnalysis);

module.exports = router;
