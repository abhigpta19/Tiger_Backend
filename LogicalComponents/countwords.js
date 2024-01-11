function removePunctuation(text) 
{
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
function countWords(text) 
{
    text= removePunctuation(text);
  const words = text.trim().split(/\s+/);
  return words.length;
}

module.exports = {countWords};
