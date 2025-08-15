/* ------------------------------------------------------------------------------
divide & conquer!
must be assorted
create a left pointer at the start of the array & a right pointer at the end of the array
while the pointer comes before the right pointer, loop
check if the element is equal to the middle, if it is, then return the index
if the value is too small, move the left pointer up and make your middle your right pointer and find the new middle between the new range.
else if the value is too large, move the right pointer down and then do the same as above.
if you never find the number, return -1

write a function called binarySearch which accepts a sorted array and a value and return the index at which the value exits. otherwise, return -1.
example:
[1,2,3,4,5], 2 //1
[1,2,3,4,5], 3 //2
[1,2,3,4,5], 5 //4
[1,2,3,4,5], 6 //-1
[5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10 //2
 */

function binarySearch(arry, val){
    let leftPointer = 0
    let rightPointer = arry.length -1
    let middle = Math.floor((leftPointer + rightPointer) / 2)
    while(leftPointer <= rightPointer){
        if(val === arry[middle]) return middle;
        if(val < arry[middle]){
            rightPointer = middle -1
        } else {
            leftPointer = middle +1
        }
        middle = Math.floor((leftPointer + rightPointer) / 2)
    }
    return arry[middle] === val ? middle : -1
}
// const arry = [5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99]
// const val = 10
// console.log(binarySearch(arry, val))

//solution 2: using recursion
function  binarySearch2(arr, val, low, high){
    let middle = (low + high) /2
    //if(arr[middle] !== val && arr.length === 1) return -1
    if(val === arr[middle]) return middle
    if(val < arr[middle]){
        return binarySearch2(arr, val, low, middle -1)
    } else {
        return binarySearch2(arr, val, middle +1, high)
    }
}
const arr = [1,2,3,4,5]
const val = 2
let low = 0
let high = arr.length -1
console.log(binarySearch2(arr, val, low, high))
/* ------------------------------------------------------------------------------

 */