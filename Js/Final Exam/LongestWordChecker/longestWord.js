


let data = prompt("Enter the desired string to find the longest word in it: ");



function LongestWord(sen) { 
 

  let words = sen.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[0-9]/g, '').split(' ');
  let longestWord = " ";

  for(let i = 0; i<words.length; i++)
  {
    if(words[i].length > longestWord.length)
    {
      longestWord = words[i];
    }
  
  }

    return longestWord; 
  
  }

  let result = LongestWord(data);

  alert("The longest word in the string is: " + result);