//write a function called isSubsequence which takes in 2 strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
//example:
//isSubsequence('hello', 'hello world') true
//isSubsequence('sing', 'sting') true
//isSubsequence('abc', 'abracadabra') true
//isSubsequence('abc', 'acb') false (order matters)
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}
//------------------------------------------------------------------------------
// the following function is meant to take an input string and reverse its values. for example the string TECHSTAR would return RATSHCET. complete the code below:

function recursive_string_reverse(s) {
    // Complete this code block
    if(s === "") return s
    var first_char = s.charAt(0);
    var last_chars = s.substring(1);

    return recursive_string_reverse(last_chars) + first_char;
}