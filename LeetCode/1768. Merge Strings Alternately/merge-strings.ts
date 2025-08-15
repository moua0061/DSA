function mergeAlternately(word1: string, word2: string): string {
    let finalResults: string = '';
    //need loop - while
    //conditional statement:
    if(word1.length == word2.length){
       //when both words length are equal:
       //loop thru first word
       for(let i = 0; i < word1.length; i++){
           //word1 char goes first then word2's char
           const word1Char = word1[i];
           finalResults += word1Char;
           console.log('what is finalResults inside loop1:', finalResults);
           //nested loop thru second loop to by in sync with the outter loop
           const word2Char = word2[i];
           finalResults += word2Char;
           console.log('what is finalResults inside loop1:', finalResults);
       };
       //then concate each letter to the finalResults variable
       console.log('what is finalResults:', finalResults);
    } else if(word1.length < word2.length){
       //when they're not equal: word1 less than word2
       //loop thru word2
       for(let i = 0; i < word1.length; i++){
           //word1 char goes first then word2's char
           if(i < word1.length){
               const word1Char = word1[i];
               finalResults += word1Char;
               console.log('what is finalResults inside loop1:', finalResults);
               //nested loop thru second loop to by in sync with the outter loop
               const word2Char = word2[i];
               finalResults += word2Char;
               console.log('what is finalResults inside loop1:', finalResults);
           }
       };
       const difference = word2.length - word1.length;
       const lastChars = word2.slice(word2.length - difference);
       console.log('what is last char:', lastChars);
       //then concate each letter to the finalResults variable
       finalResults += lastChars;
       console.log('what is finalResults:', finalResults);
    } else {
       //when they're not equal: word2 less than word1
           //when they're not equal: word1 less than word2
       //loop thru word2
       for(let i = 0; i < word2.length; i++){
           //word1 char goes first then word2's char
           if(i < word2.length){
               const word2Char = word2[i];
               finalResults += word2Char;
               console.log('what is finalResults inside loop1:', finalResults);
               //nested loop thru second loop to by in sync with the outter loop
               const word1Char = word1[i];
               finalResults += word1Char;
               console.log('what is finalResults inside loop1:', finalResults);
           }
       };
       const difference = word2.length - word1.length;
       const lastChars = word2.slice(word2.length - difference);
       console.log('what is last char:', lastChars);
       //then concate each letter to the finalResults variable
       finalResults += lastChars;
       console.log('what is finalResults:', finalResults);
    }
    
    
    return finalResults;
    };
    
    
    //when both words length are equal:
       //loop & merge
    //when they're not equal: word1 less than word2
       //loop & merge until u get to the end of the first word
       //nested loop thru second loop to by in sync with the outter loop
    //when they're not equal: word2 less than word1
       //loop & merge until u get to the end of the second word
       //nested loop thru second loop to by in sync with the outter loop
    