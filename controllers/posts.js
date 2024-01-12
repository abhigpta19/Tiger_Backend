const Redis = require('ioredis');
//following is the connection URL which is connected to the Redis instance in the Render
const redis = new Redis(`rediss://red-cmgmr88l5elc73809t7g:GbjyOUX9yM6lbokABmQb40luLAeNMvrn@singapore-redis.render.com:6379`);
const { countWords} = require('../LogicalComponents/countwords');
const { calculateAverageWordLength} = require('../LogicalComponents/calculateavglength');


const createPost = async (req, res) => 
{
  try 
  {
    //expecting a json file as a request and of the format { text_content : {string} , uniqueIdentifier : {string}}
    const { text_content, uniqueIdentifier } = req.body;
    //Now we will encode the text with base64 encoding before storing it to database for integrity
    const base64EncodedString = btoa(text_content);
    //the following line will add a key value pair to the Redis DB and it uses cachehing for fast access of data
    await redis.set(uniqueIdentifier,base64EncodedString);
    //upon successful addition of data the following data is displayed as a response
    res.status(200).json({text : "Your post is saved successfully!!!"});
  } 
  catch (error) 
  {
    //handling of some server error
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPostAnalysis = async (req, res) => 
{
  try 
  {
    const { id } = req.params;
    //checking if id is present or not
    const ifexist = await redis.exists(id);
    if(!ifexist)
    {
      res.status(404).json({msg : "Id not found"})
      return;
    }
    //retreival of the post content in encoded format which has the unique id provided in the route
    const encoded_content = await redis.get(id);
    //now we will decode our data content so that we can perform the operations on it
    const content = atob(encoded_content);
    //the logic of the word count is implemented in the folder LogicalComponents --> countword.js
    const count_of_words = await countWords(content);
    //the logic of the word count is implemented in the folder LogicalComponents --> calculateavglength.js
    const average_length= await calculateAverageWordLength(content);
    //upon successful calculation of above elements we will send them as response in json format
    res.status(200).json({Content : content, word_Count: count_of_words, Average_Word_Length: average_length});
  } 
  catch (error) 
  {
    //handling exceptions
    console.error('Error getting post analysis:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPost, getPostAnalysis };
