//write a function called averagePair. given a sorted array of integers & a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than 1 pair that matches the average target.
//time: O(N)
//space: 0(1)
//sample:
//averagePair([1, 2, 3], 2.5) true
//averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) true
//averagePair([-1, 0, 3, 4, 5, 6], 4.1) false
//averagePair([], 4) false
function averagePointer(arr, avgTarget){
    //first pointer starting at 0
    let pointer1 = 0
    //second pointer starging at the end of array
    let pointer2 = arr.length -1

    //while pointer1 is less than pointer 2 ... should be true
    while(pointer1 < pointer2){
        //add both pointers and divide by 2 to get the average
        //put the average in a variable
        let theValue = (arr[pointer1] + arr[pointer2] / 2)
        //if the value is the same as the target #, return true
        if(theValue === avgTarget){
            return true
        } else if(theValue < avgTarget){
            //but if value is less than the target #, move pointer 1
            pointer1++
        } else {
            //else if value is greater than the target, move pointer2
            pointer2--
        }
    }
    //return false if value doesn't meet any of the conditional statements above
    return false
}
//const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19]
//const avgTarget = 8
//console.log(averagePointer(arr, avgTarget))

//------------------------------------------------------------------------------
//write a function called isSubsequence which takes in 2 strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
//example:
//isSubsequence('hello', 'hello world') true
//isSubsequence('sing', 'sting') true
//isSubsequence('abc', 'abracadabra') true
//isSubsequence('abc', 'acb') false (order matters)

function isSubsequence(string1, string2){
    //first pointer starting at 0
    let i = 0
    //second pointer starting at 0
    let j = 0
    //eliminate edge cases:
    //if string 1 is empty or does not exist, return true
    if(!string1) return true
    //loop = that while pointer 2 is less than the length of string2
    while(j < string2.length){
        //if the char at string2 is the same as char at string2, increment pointer1 to go to the next char in string1
        if(string2[j] === string1[i]){
            //i only moves when string1[i] is the same as string2[j]
            i++
        }
        //if pointer1 reaches to the end of string1, then return true
        //because if pointer1 reaches at the end of string 1 first, that means everything in string 2 is there in string 1
        if(i === string1.length){
            return true
        }
        //if string1[i] is not the same as string2[j], keep increment j because j needs to keep moving no matter what
        j++
    }
}
// const string1 = 'hello'
// const string2 = 'hello world'
// isSubsequence(string1, string2)
/* ------------------------------------------------------------------------------
implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
Hint: you can solve this using the frequency counter OR multiple pointers
Examples:
areThereDuplicates(1, 2, 3) ... false
areThereDuplicates(1, 2, 2) ... true
areThereDuplicates('a', 'b', 'c', 'a') ... true
 */
//Solution 1: time complexity O(n)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}
//frequency counter solution in Frequency_counter.js

/* ------------------------------------------------------------------------------

 */