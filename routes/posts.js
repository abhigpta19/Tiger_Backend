const express = require('express');
const router = express.Router();
const { createPost, getPostAnalysis } = require('../controllers/posts');

// Post Creation
router.post('/', createPost);

// GET Analysis
router.get('/:id/analysis', getPostAnalysis);

module.exports = router;
