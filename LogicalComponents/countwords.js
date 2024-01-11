function removePunctuation(text) 
{
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
function countWords(text) 
{
  //first remove all the punctuations from the text content for counting the total number of words count
  refined_text= removePunctuation(text);
  //all the words will be stored in words array which are separated by space
  const words = refined_text.trim().split(/\s+/);
  return words.length;
}

module.exports = {countWords};
