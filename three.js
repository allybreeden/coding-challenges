function LongestWord(sen) { 

    sen = sen.replace(/[^a-zA-Z ]/ig,'');
    let splitStr = sen.split(' ');
    let longWord = 0;

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longWord) {
            longWord = splitStr[i].length;
            sen = splitStr[i];
        }
    }
    // code goes here  
    return sen; 
  
  }


  console.log(LongestWord("Hello world123 567"));

  console.log(LongestWord("fun&!! time"));

  console.log(LongestWord("I love dogs"));