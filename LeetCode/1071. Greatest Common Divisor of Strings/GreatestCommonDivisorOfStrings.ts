function gcdOfStrings(str1: string, str2: string): string {
    // If the concatenation of str1 and str2 is not equal to the concatenation
    // of str2 and str1, then no common divisor exists
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // Find the GCD of the lengths
    const gcd = (a: number, b: number): number => {
        return b === 0 ? a : gcd(b, a % b);
    };
    
    const gcdLength = gcd(str1.length, str2.length);
    
    // The GCD string is the prefix of either string with length = gcdLength
    return str1.substring(0, gcdLength);
    //variable for longest length
    //let longestWord: string = "";
    //variable for the word
    //let longestLength:number = 0;

    //need a for loop
    //for(let i = 0; i < str2.length; i++){
    //need to grab each char from str2
    //const currentChar = str2[i];
    //const str1Char = str1[i];
    //then check if that char is qual to char position in str1
    //if(currentChar == str1Char){
        //if yes, replace the longest word variable & the longest length
        //longestWord += currentChar;
    //} else {
        //if no, break out of the loop
        //break;
    //}
    //}
    //console.log('what is longest word: ', longestWord);
    //return longestWord;
};