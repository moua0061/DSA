function reverseVowels(s: string): string {
    //get vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    //set variable for vowels in string
    const vowelsInS: string [] = [];
    let results: string = '';
    //loop thru the string
    for(let i = 0; i < s.length; i++){
        const currentLetter =  s[i];
        const doesContainVowel = vowels.includes(currentLetter);
        if(doesContainVowel){
            //if the letters match the vowels, push to the variable array
            vowelsInS.push(currentLetter);
        }
    }
    //loop thru the string again and replace each vowel with the array starting at the end
    const copyOfS = s.split('');
    //console.log('what is copyOfS:', copyOfS);
    //console.log('what is vowelsInS:', vowelsInS);
    for(let i = 0; i < copyOfS.length; i++){
        const currentLetter =  copyOfS[i];
        const doesContainVowel = vowels.includes(currentLetter);
        //if the letters match the vowels, push to the variable array
        if(doesContainVowel){
            //console.log('popping off vowels in s:', vowelsInS.pop());
            copyOfS[i] = vowelsInS.pop();
        }
    }
    //console.log('what is copyOfS:', copyOfS);
    results = copyOfS.join('');
    return results;
};