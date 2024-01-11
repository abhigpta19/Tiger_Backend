function removePunctuation(text) 
{
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function calculateAverageWordLength(text) 
{
  //remove punctuation to calcuate the average number of words
  refined_text = removePunctuation(text);
  //calculating total words
  const words = refined_text.trim().split(/\s+/);

  if (words.length === 0) //handling empty text
  {
    return 0; 
  }

  //calculating total characters
  const totalLength = words.reduce((acc, word) => acc + word.length, 0);
  //calculating total average length of each word
  const averageWordLength = totalLength / words.length;
  //returning the average number of words correce to two decimal places
  return averageWordLength.toFixed(2);
}

module.exports = {calculateAverageWordLength};