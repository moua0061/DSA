function isSubsequence(s: string, t: string): boolean {
    // A subsequence of a string is a new string that is formed from the original string by   deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
    //"ace"
    //"abcde"
    //need a loop over t 
    //need a loop over s 
    //need to check s[i] == t[i]
    //if s = a, b = a, if true, increment the s & t pointer 
    //if s = b, b = h, if falase, incremeent the t pointer only : a stays in same index until t finds a match
    //if pointer t is at the end and s is also at the end, return true
    //but if pointer t is at the end and s is not at the end, return false
    //console.log('what is s length:', s.length);
    //console.log('what is t length:', t.length);
    let sPointer = 0;
    let tPointer = 0;
    
    while (tPointer < t.length){
        if(s[sPointer] === t[tPointer]){
            sPointer++;
            tPointer++;
        } else {
            tPointer++;
        }
    }

    //console.log('what is spointer:', sPointer);
    //console.log('what is tpointer:', tPointer);

    // if(sPointer === s.length){
    //     return true;
    // }

    //return false;
    return sPointer === s.length;     
};