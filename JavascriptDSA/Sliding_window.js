/*
maxSubarraySum:
given an array of integers & a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that the subarray must consist of consecutive elements from the original array. For an example: [100, 200, 300] is a subarray of the original array but [100, 300] is not
Examples:
maxSubarraySum([100, 200, 300, 400], 2) ... 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) ... 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) ... 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) ... 5
maxSubarraySum([2, 3], 3) ... null
 */
//Solution 1: nested loop => time complexity O(n^2)
function maxSubarraySum(arr, n){
    //eliminate edge cases:
    //if the number is greater than the array's length, return null
    if(n > arr.length){
        return null
    }
    //need a variable to hold my largest sum
    //-Infinity because the integers can all be negative
    let largestSum = -Infinity
    //need a loop
    //the loop only goes to the end minus the number because you don't want to get all the way to the end when there is no more numbers after it based from the num. the last
    for(let i = 0; i < arr.length - n; i++){
        //need a variable to store our sum each time thru the loop
        let tempSum = 0
        //need a second loop to add the numbers together
        //j is less than num because that is our window
        for(let j = 0; j < n; j++){
            //add the numbers
            tempSum += arr[i + j]
        }
        //if the tempSum is greater than max, make tempSum the max
        if(tempSum > largestSum){
            largestSum = tempSum
        }
        //console.log(tempSum, largestSum)
    }
    return largestSum
}
// const arr = [1, 4, 2, 5, 3, 8, 2, 6, 0]
// const n = 4
// console.log(maxSubarraySum(arr, n))

//Solution 2: linear => time complexity O(n)
function maxSubarraySum2(arr, n){
    //eliminate edge cases:
    //if n is greater than the array's length, return null
    if(n > arr.length) return null
    //need a variarble to store my max sum
    let maxSum = 0
    //need a variable to store my temp sum within the loop
    let tempSum = 0
    //first loop: loop thru the first numbers of n to get the sum
    for(let i = 0; i < n; i++){
        maxSum += arr[i]
        //the sum should be the first 4 #'s
        //[1, 4, 2, 10 ]= 17
    }
    //then i want to make the tempSum the maxSum from the previous loop
    tempSum = maxSum
    //second loop: loop through the array, starting i at n and goes until the end of the array, then increment i
    for(let i = n; i < arr.length; i++){
        //i want to take the tempSum, subtract the element in that is outside of the window as i moves
        //& add whatever i is on at the end
        //so as the window of n moves, we're subtracting the # that is falling off at the end of the window & adding the # next in the array
        tempSum = tempSum - arr[i - n] + arr[i]
        //using Math.max() to see between the 2 value, which is bigger
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

// const arr = [1, 4, 2]
// const n = 4
// console.log(maxSubarraySum2(arr, n))

/* ------------------------------------------------------------------------------
write a function called minSubArrayLen which accepts 2 parameters - an array of positive integers and a positive integer.
this function should return the minimal length of contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:
minSubArrayLen([2, 3, 1, 2, 4, 3], 7) ... 2 because [4, 3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) ... 2 because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) ... because [62] is the greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) ... 3 because [16, 22, 5] = 43 >= 39
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) ... 5 because 5 #'s to >= 55
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) ... 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) ... 0
 */
function minSubArrayLen(arr, n){
    //need a variable to hold the total
    let total = 0
    //need a variable to start the window
    let start = 0
    //need a variable for the end of the window
    let end = 0
    //need a variable to hold the min
    let min = Infinity
    //loop thru the array while the start is less than the array's length
    while(start < arr.length){
        //if the current window doesn't add up to the given n & we have not reached the end of the array, then move the window to the right
        if(total < n && end < arr.length){
            total += arr[end]
            end++
        } else if(total >= n){
            //if the current window adds up to at least n, then shrink the window
            //find the min between the min & difference between end & start
            min = Math.min(min, end-start)
            //make the total subtract the index of start of array
            total -= arr[start]
            //increment the start
            start++
        } else {
            break
        }
    }
    return min === Infinity ? 0 : min
    //your window will contain all elements >= n as it grows. once it's growing, the #'s will fall off your window as the window grows to >= n. once you reach the end of the array, the window will shrink & the #'s inside that window will either be >= n or < , but your window will stop once it meets >=n . the difference between the 2 pointers will be your # of subarray
}
// const arr = [4, 3, 3, 8, 1, 2, 3]
// const n = 11
// console.log(minSubArrayLen(arr, n))

//Solution 2: nested loop O(n)
const minSubArrayLen2 = (arr, n) => {
    let len = arr.length

    for (let i = 0; i < arr.length; i++) {
        let arr = [arr[i]]
        let sum = arr[i]
        if(arr[i] >= n) len = 1
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            arr.push(arr[j])
            if(sum >= n) {
                if(arr.length !== 0 && len > arr.length) len = arr.length;
            }
        }
    }
    return len === arr.length ? 0 : len
}

/* ------------------------------------------------------------------------------
Find Longest Substring:
write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
findLongestString("") ... 0
findLongestString("rithmschool") ... 7
findLongestString("thisisawesome") ... 6
findLongestString("thecatinthehat") ... 7
 */
function findLongestSubstring(str){
    //eliminate edge cases
    //if no string or string is empty, return 0
    if(str === "") return 0
    //set a variable to hold your longest
    let longest = 0;
    //put each character in an object as the key & the index as a value
    let seen = {};
    //need a starting pointer
    let start = 0;

    //looping thru the string to get each character out
    for (let i = 0; i < str.length; i++) {
        //need a varible to hold a character
        let char = str[i];
        //if the character is already in the seen object,
        //then move the starting point to the index of the duplicated character (which should be the value) but we need to see between the index & the start point, which is the biggest
        if (seen[char]) {
            start = Math.max(start, seen[char]);
            // console.log(Math.max(seen[char]))
        }
        // index - beginning of substring + 1 (to include current in count)
        //then make the longest the the difference between your starting point & wherever i is currently at (plus 1) to get the length
        //the longest is pretty much the length of the substring
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char of the duplicate so that it does not double count
        seen[char] = i + 1;
    }
    return longest;
}
/*
i = 12
start = 9
longest = 4
{
    t: 1,
    h: 2,
    i: 4,
    s: 10,
    a: 7,
    w: 8,
    e: 9,
    o: 11,
    m: 12,
}
 */

const str = "thisisawesome"
console.log(findLongestSubstring(str))
/* ------------------------------------------------------------------------------

 */