/*
Contains Duplicate
Given an integer array nums, return true if any values appears at least twice in the array, and return false if every element is distinct
nums = [1, 2, 3, 1]
true

nums = [1, 2, 3, 4]
false

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
true
 */


//const nums = [2,14,18,22,22]
//true
function containsDuplicate(){
    //declare an object
    let numsInArry = {}
    /*{
          1: 0,
          2: 0,
          3: 0,
      }*/

    //need a loop to go thru nums
    for(let num of nums){
        //console.log(num)
        //then put each element in numsInArry as keys
        //numsInArry[num]
        //if the value of the key is greater than 0, increment the value
        if(numsInArry[num] > 0){
            numsInArry[num]++
        } else {
            //else set the value of each key to 1
            numsInArry[num] = 1
        }
    }
    //console.log(numsInArry)
    //loop thru numsInArry
    //Object.values(numsInArry).includes(2)
    //console.log("the array: ", numsInArry)
    //console.log("the values: ", Object.values(numsInArry))
    let valuesInArray = Object.values(numsInArry)
    //console.log("array w/values: ", Object.values(numsInArry))
    //if the value is greater than 2, return true
    for(let values of valuesInArray){
        if(values >= 2) return true
    }
    //else return false
    return false
}

//using hash solution 1
function containsDuplicate2(nums) {
    let hashSet = new Set();
    for (let i of nums) {
        //if the hash already has the element when i is the element,
        //technically the count would increment making it TRUE in our case
        if (hashSet.has(i)) return true;
        else {
            hashSet.add(i);
        }
    }
    //otherwise return false as a default
    return false;
};

//using hash solution 2
function containsDuplicate3(nums) {
    //creating a new hash
    const set = new Set()

    //looping thru the arry to extract each element and adding them to hashSet
    nums.map(num => set.add(num));
    //if an element is already in the hashSet, it won't add it
    //meaning, it's already in there

    //if the length of the array is the same as the hashSet,
    //then it is false ; because all keys appear once in the hashSet
    //because if it appears more than 2x, the length of the hashSet should be
    //less than the array
    return nums.length === set.size ? false : true
};

//solution 3 using mapping
function containsDuplicate4(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true
        map.set(nums[i], true)
    }
    return false
};

//const nums = [2,14,18,22,22]
//containsDuplicate4(nums)

/* ------------------------------------------------------------------------------
Given an array of integers, where all elements but one occur twice, find the unique element.
Example
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.
lonelyinteger has the following parameter(s): int a[n]: an array of integers
Returns: int: the element that occurs only once
 */
function lonelyinteger(a) {
    //create a new hashSet to track the frequencies of the numbers in the array
    let frequencyTracker = new Set()
    //loop thru the array to get each element
    for(let num of a){
        //if the element exists as a key in the hashSet, increment the count
        if(frequencyTracker[num] > 0){
            frequencyTracker[num]++
        } else {
            //else add the element as a key to the hashSet and set its value to 1
            frequencyTracker[num] = 1
        }
    }
    //loop thru the hashSet to get the keys
    for(let keys in frequencyTracker){
        //if the values is equal to 1, return the key
        if(frequencyTracker[keys] === 1){
            return keys
        }
    }
}
// const a = [4, 9, 95, 93, 57, 4, 57, 93, 9]
// console.log(lonelyinteger(a))