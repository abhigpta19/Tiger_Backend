const Redis = require('ioredis');
const redis = new Redis();
const { countWords} = require('../LogicalComponents/countwords');
const { calculateAverageWordLength} = require('../LogicalComponents/calculateavglength');


const createPost = async (req, res) => 
{
  try 
  {
    const { text, uniqueIdentifier } = req.body;
    await redis.set(uniqueIdentifier,text);
    const post = await redis.get(uniqueIdentifier);
    res.status(201).json(post);
  } 
  catch (error) 
  {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPostAnalysis = async (req, res) => 
{
  try 
  {
    const { id } = req.params;
    const post = await redis.get(id);
    const wc = await countWords(post);
    const avg = await calculateAverageWordLength(post);
    res.json({ wordCount: wc, averageWordLength: avg });
  } 
  catch (error) 
  {
    console.error('Error getting post analysis:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPost, getPostAnalysis };
