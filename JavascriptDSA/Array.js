/*
Find the number!
Given an unsorted array of n elements, find if the element k is present in the array or not. finfdNumber function has 2 parameters:
1. an array of integers denoting the elements in the array,
2. an integer, k denoting the element to be searched in the array.
the function must return a string "yes" or "no" if the element is present in the array or not
arr = [2, 3, 1]
k = 5
output should be "no"
 */
//Solution 1: (mine)
// const arr = [3, 2, 1]
// const k = 1
//YES

function findNumber(arr, k) {
    //console.log("what is k: ", k)
    let numIsInArr = "NO"
    //what if arr is empty?
    if(arr == null || arr == ""){
        return numIsInArr
    }
    //need to loop thru the array
    //then see if each index in the array matches k
    for(let i = 0; i < arr.length; i++){
        //if the index matches k,
        if(arr[i] === k){
            return numIsInArr = "YES"
        }
        //return "YES"
        //else , return "NO"
    }
    return numIsInArr
    //time complexity O(n)
}
//findNumber(arr, k)
/* ------------------------------------------------------------------------------
Odd Numbers
Given two integers, l & r, print all the odd numbers between l & r. oddNumbers has 2 parameters:
1. an integer l, denoting the left part of the range
2. an intger r, denoting the right part of the rang
the function must rturn an array of integers denoting the odd numbers between l and r
l = 3
r = 9
the odd numbers between 3 & 9 are 3, 5, 7,9
 */
//Solution 1: (mine)
//const l = 3
//const r = 9
function oddNumbers(l, r) {
    //need an empty array to store my integers
    let resultsArry = []
    //array must start at l & end at r
    //need my loop to start at l
    let start = l
    //need my loop to end at r
    let end = r
    //need a loop

    while(start <= end){
        //if the number is not even, add it to the empty arry
        if(start % 2 !== 0){
            resultsArry.push(start)
        }
        //else, do nothing
        //at the of the loop, i need to increment i
        start++
    }
    return resultsArry
    //time complexity O(n)
}
//oddNumbers(l, r)
/* ------------------------------------------------------------------------------
Given an array of integers, calculate the ratios of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
arr = [1, 2, 0, -1. -1]
there are n = 5 elements, 2 positive, 2 negative, and 1 zero
their ratios are:
0.400000
0.400000
0.200000
 */
// const arr = [-4, 3, -9, 0, 4, 1]

//Solution 1: (mine)
function plusMinus(arr) {
    let toatlNegativeNums = 0
    let totalPositiveNums = 0
    let totalZeroNums = 0
    let totalNumsInArr = arr.length

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            totalZeroNums++
        } else if(arr[i] < 0){
            toatlNegativeNums++
        } else if(arr[i] > 0){
            totalPositiveNums++
        }
    }
    let negNums = (toatlNegativeNums / totalNumsInArr).toFixed(6)
    let posNums = (totalPositiveNums/ totalNumsInArr).toFixed(6)
    let zeroNums = (totalZeroNums / totalNumsInArr).toFixed(6)
    console.log(posNums)
    console.log(negNums)
    console.log(zeroNums)
    //time complexity O(n)
}
//plusMinus(arr)

//Solution 2
function plusMinus2(arr) {
    let counter = new Array(3).fill(0);
    //gives an the array with 3 keys and fills it with 0 as its values
    //{
    //  0: , for zeros
    //  1: , for positives
    //  2: , for negatives
    //}
    for(let value of arr) {
        if(value > 0)
            counter[0]++;
        else if(value < 0)
            counter[1]++;
        else
            counter[2]++;
    }
    //loops thru the counter object
    counter.map((value) => console.log((value / arr.length).toFixed(6)));
    //time complexity O(n)
}
//plusMinus2(arr)

/* ------------------------------------------------------------------------------
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers
arr = [1, 3, 5, 7, 9]
The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24.
The function prints:
16 24
miniMaxSum has the following parameter(s):
arr: an array of  integers

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
input: [1, 2, 3, 4, 5]
output: 10 14
Sum everything except 1, the sum is 2+3+4+5 = 14.
Sum everything except 2, the sum is 1+3+4+5 = 13.
Sum everything except 3, the sum is 1+2+4+5 = 12.
Sum everything except 4, the sum is 1+2+4+5 = 11.
Sum everything except 5, the sum is 1+2+3+4 = 10.
 */

//Solution 1: using 2 loops => O(n) time complexity
function miniMaxSum(arr) {
    //need a variable to store my sum total of all elements in the array
    let total = 0
    //loop through the array and add all elements together
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    //need an empty array to put all the sum into
    const solutionArr = []
    //need a variable for min
    let min = Infinity
    //need a variable for max
    let max = -Infinity
    //loop through the array & subtract each indexes
    for(let j = 0; j < arr.length; j++){
        //need a variable to store the sum of each loop minus the current index
        let sum = total - arr[j]
        console.log("what is sum ", sum)
        //then push each sum to the solutionArr
        //solutionArr.push(sum)
        //if sum is less than min, make min the sum
        if(sum < min){
            min = sum
            //console.log("what is min ", min)
        }
        //if the sum is greater than the max, make sum the max
        if(sum > max){
            max = sum
            //console.log("what is max ", max)
        }
    }
    //extract the min & max from solutionArr
    //using the spread operator allows each individual elements to be spread out and compared to
    //let min = Math.min(...solutionArr)
    //let max = Math.max(...solutionArr)
    console.log(min, max)

}
// const arr = [140638725, 436257910, 953274816, 734065819, 362748590]
// miniMaxSum(arr)


//Solution 2: using nested loops
function miniMaxSum2(pArr){
    //need variable to store the sum
    //need a variable to store min
    let min = 0
    //need a variable to store max
    let max = 0
    //need loop to loop thru to extract 1 element out of the pArr
    for(let i = 1; i < pArr.length; i++){
        //console.log(pArr.slice(i))
        //need a second loop to add the rest of the elements to get the sum
        //put that sum in a variable
    }
    //find the min & max
    //console.log(min, max)
}
// const arr = [140638725, 436257910, 953274816, 734065819, 362748590]
// miniMaxSum2(arr)

/* ------------------------------------------------------------------------------
given an array, the array must be sorted in ascending order. find the median in the array and return the number
Example:
[0, 5, 2, 4, 3, 5, 1]
Output: 3
 */
function findMedian(arr) {
    //sort the array first which means i need to put it in a new variable
    let sortedArr = arr.sort((a, b) => a-b)

    //take the length of array, divide it by 2
    //numbers with decimal, we will need to round the answer down by using Math.floor()
    //this should be the midpoint of the array
    let midpointOfArr = Math.floor(arr.length / 2)
    //return that midpoint index of the array
    return arr[midpointOfArr]
}
// const arr = [45, 23, 2, 6, 9, 23, 56, 2, 98, 88]
// console.log(findMedian(arr))

/* ------------------------------------------------------------------------------
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]
The left-to-right diagonal 1+5+9=15. The right to left diagonal 3+5+9=17. Their absolute difference is 15-17=2.
 */
function diagonalDifference(arr) {
    //need a variable to do the difference
   let theDifference = 0
    //need variable for leftRight sum
    let leftRightSum = 0
    //need varirable for rightLeft sum
    let rightLeftSum = 0
    //loop thru the matrix - the first loop goes through the rows
    for(let i = 0; i < arr.length; i++){
        //second loop goes thru each indexes in that row aka "columns"
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i][j])
        }
    }

    //subtract these 2 sums
    //the get the absolute value of a negative number, use Math.abs()
    theDifference = Math.abs(leftRightSum - rightLeftSum)
    //return the difference
    return theDifference
}
// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
// ]
// console.log(diagonalDifference(arr))
/* ------------------------------------------------------------------------------
* write a function called linearSearch which accepts an array & a value, and returns the index at which the value exits. if the value does not exist in the array, return -1.
* examples:
* [10,15,20,25,30], 15 // 1
* [9,8,7,6,5,4,3,2,1,0], 4 // 5
* [100], 100 // 0
* [1,2,3,4,5], 6 // -1
* [9,8,7,6,5,4,3,2,1,0], 10 // -1
* [1,2,3,4,5], 6 // -1
* [100], 200 // -1
* */
function linearSearch(arr, num){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}
// const arr = [9,8,7,6,5,4,3,2,1,0]
// const num = 10
// console.log(linearSearch(arr,num))

/* ------------------------------------------------------------------------------

 */