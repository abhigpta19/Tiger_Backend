function removePunctuation(text) 
{
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function calculateAverageWordLength(text) 
{
    text = removePunctuation(text);
  const words = text.trim().split(/\s+/);

  if (words.length === 0) 
  {
    return 0; 
  }

  const totalLength = words.reduce((acc, word) => acc + word.length, 0);

  const averageWordLength = totalLength / words.length;
  return averageWordLength;
}

module.exports = {calculateAverageWordLength};