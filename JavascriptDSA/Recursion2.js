//recursion needs a base case => a situation when teh recursion ends
//needs a different input every time you call the function
//needs to return so it can send back up the stack to return a value

//where things can go wrong?
//no base case
//forgetting to return or returning the wrong thing
//stack overflow

//pure recursion tips?
//for arrays, use methods like:
//slice, spread operator, concat to make copies of array so you do not mutate them

function countDown(num) {
  if (num <= 0) {
    //this is the base case
    console.log("all done");
    return;
  }
  console.log(num);
  num--; //this is the different input
  countDown(num); //this is the different input
}
// console.log(countDown(5));
/* ----------------------------------------------------------------------------------------------------- */

function sumRange(num) {
  if (num === 1) return 1; //this is the base
  return num + sumRange(num - 1); //this is the different input
}
// console.log(sumRange(10));
//sumRange(5)
//returns 5 + sumRange(4)
//returns 4 + sumRange(3)
//returns 3 + sumRange(2)
//returns 2 + sumRange(1)
//returns 1
//then it goes up the ladder to fill in the return values
//for each call stacks that are waiting to be returned
//sumRange(1) return value is 1
//which means 2 + 1 = 3 is the return value for sumRange(2)
//then 3 + 3 = 6 is the return value for sumRange(3)
//then 4 + 6 = 10 is the return value for sumRange(4)
//then 5 + 10 = 15 is the return value for sumRange(5)
//and our answer is 15
//recursion is a stacked => last one in, first one out

/* ----------------------------------------------------------------------------------------------------- */
//FACTORIAL : represented by !
//=> 4! = 4*3*2*1
//=> 10! = 10*9*8*7*6*5*4*3*2*1
function factorialNums(num) {
  if (num === 1) return 1;
  return num * factorialNums(nums - 1);
}
//console.log(factorialNums(5));
//factorialNums(5)
//5 * factorialNums(4)
//4 * factorialNums(3)
//3 * factorialNums(2)
//2 * factorialNums(1)
//returns 1
//2 * 1 = 2 .... factorialNums(2)
//3 * 2 = 6 .... factorialNums(3)
//4 * 6 = 24 ... factorialNums(4)
//5 * 24 = 120 ... factorialNums(5)
//returns 5 * 24 = 120

/* ----------------------------------------------------------------------------------------------------- */
//Helper Method Recursion => an outer function that has an inner function to call itself

function collectOddValues(arr) {
  let results = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return; //base case

    //if the first index of the array is not an even #, add it to the results array
    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
      //[]
      // .
      //results = [1,3,5,7,9,9]
    }
    //call the helper function & pass in the array to which needs to slice one index off the array as a new array to be passed
    //in as an argument
    //the array will get shorter as the function calls itself again
    //this is the different input
    helper(helperInput.slice(1));
    //helper([])
  }

  //call the helper function and pass in the arr as an argument
  helper(arr);
  return results;
}
//console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));

//without a helper method looks like this for the above example:
function collectOddValues2(arr) {
  //declare an empty arry
  let newArr = [];

  //base case
  if (arr.length === 0) return newArr;

  //if the first index is not even, add it to the newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //then make newArr equals newArr to concat whatever the function returns
  //with the array slicing off 1 index every time being passed in the argument
  newArr = newArr.concat(collectOddValues2(newArr.slice(1)));
  return newArr;
}

//these call stacks are waiting to be called after it reaches to the end, then the
//function itself returns what it is waiting for:
//collectOddValues2([1, 2, 3, 4, 5])
//newArr = [1]
//[1].concat(collectOddValues([2, 3, 4, 5]))
//newArr = []
//[].concat(collectOddValues([3, 4, 5]))
//newArr = [3]
//[3].concat(collectOddValues([4, 5]))
//newArr = []
//[].concat(collectOddValues([5]))
//newArr = [5]
//[5].concat(collectOddValues([]))
//newArr = []
//returns [5]
//returns [5]
//returns [3,5]
//returns [3, 5]
//returns [1,3,5]
//answer is [1,3,5]
//collectOddValues2([1, 2, 3, 4, 5])

/* ----------------------------------------------------------------------------------------------------- */
//write a function called power which accepts a base & an exponent. the function shoudld
//return the power of that base to the exponent.
//this function should mimic the functionality of Math.pow()
//do not worry about negative bases & exponents
//power(2,0) ... 1
//power(2,2) ... 4
//power(2,4) ... 16

//solution 1: mine
function power(num1, num2) {
  //2*2*2*2
  //need a base case
  if (num2 === 0) return 1;

  //need a input that is changing
  return num1 * power(num1, num2 - 1);
}
//power(2,4)
//2 * power(2, 3)
//2 * power(2)
//2 * power(1)
// 1
//2*1
//2*2
//2*4
//answer is 16

//solution 2: udemy
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
/* ----------------------------------------------------------------------------------------------------- 
write a functional factorial which accepts and returns the factorial of that number.
a factorial is a product of an integer and all the integers below it.
4! is equal to 24 because 4*3*2*1 = 24
factorial zero (0!) is always 1
factorial(1) ... 1
factorial(2) ... 2
factorial(4) ... 24
factorial(7) ... 5040
*/
//solution 1 : mine
function factorial(num) {
  //need a base case
  if (num === 0) return 1;

  //need an input that is changing
  return num * factorial(num - 1);
}
//factorial(4)
//4 * factorial(3)
//3 * factorial(2)
//2 * factorial(1)
//1
//2*1
//3 * 2
//4*6
//24
//console.log(factorial(7));

//solution 2: udemy
function factorial2(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

/* ----------------------------------------------------------------------------------------------------- 
write a function called productOfArray which takes in an array of numbers and returns the product of them all
productOfArray([1,2,3]) ... 6
productOfArray([1,2,3, 10]) ... 60
*/
function productOfArray(arr) {
  //need a base case
  if (arr.length === 0) return 1;

  //need an input that is changing
  return arr[0] * productOfArray(arr.slice(1));
}

//console.log(productOfArray([1, 2, 3]));
//productOfArray([1,2,3,10])
//arr[0] = 1
//1 * productOfArray([2,3,10])
//arr[0] = 2
//2 * productOfArray([3,10])
//arr[0] = 3
//3 * productOfArray([10])
//10 * productOfArray([])
//1
//10*1
//3*10
//2*30
//1*60
//answer is 60

/* ----------------------------------------------------------------------------------------------------- 
write a function called e which accepts a number & adds up all the numbers from 0 to the number 
passed to the function.
recursiveRang(6) ... 21
recursiveRang(10) ... 55
*/
function recursiveRange(num) {
  //need a base case
  //0,1,2,3,4,5,6
  if (num === 1) return 1;

  //need an input that is changing
  return num + recursiveRange(num - 1);
}
//console.log(recursiveRange(10));
//recursiveRange(6)
//6 + recursiveRange(5)
//5 + recursiveRange(4)
//4 + recursiveRange(3)
//3 + recursiveRange(2)
//2 + recursiveRange(1)
//1
//2 + 1
//3 + 3
//4 + 6
//5 + 10
//6 + 15
//21

/* ----------------------------------------------------------------------------------------------------- 
write a recursive function called fib which accepts a number & returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and
where every number thereafter is equal to the sum of the previous 2 numbers
fib(4) ... 3
fib(10) ... 55
fib(28) ... 317811
fib(35) ... 9227465
*/
function fib(num) {
  //num = nth
  //need a base case
  //start 1,1 ...
  if (num <= 2) return 1;

  //need an input that is changing
  return fib(num - 1) + fib(num - 2);
}
//console.log(fib(28));

//1,1,2,3,5,8,13,21,34,55,89
//fib(10)
//fib(9) + fib(8)
//fib(8) + fib(7) + fib(7) + fib(6)
//fib(7) + fib(6) + fib(6) + fib(5) + fib(6) + fib(5) + fib(5) + fib(4)
//fib(6) + fib(5) + fib(5) + fib(4) + fib(5) + fib(4) + fib(5) + fib(4) + fib(5) + fib(4) + fib(4) + fib(3) + fib(4) + fib(3)

/* ----------------------------------------------------------------------------------------------------- 
write a recursive function called reverse which accepts a string & returns a new string in reverse.
reverse('awesome) ... 'emosewa'
reverse('rithmschool') ... 'loohcsmhtir'
*/
function reverse(str) {
  //base case
  if (str === "") return str;

  //input changing
  let firstChar = str.charAt(0);
  let lastChars = str.substring(1);
  //   console.log(firstChar);
  //   console.log(lastChars);

  return reverse(lastChars) + firstChar;
}
//console.log(reverse("awesome"));
//reverse("awesome")
//reverse("wesome") + "a"
//reverse("esome") + "w"
//reverse("some") + e
//reverse("ome") + s
//reverse("me") + o
//reverse("e") + m
//reverse("") + e
//""
//e
//e
//em
//emo
//emos
//emose
//emosew
//emosewa
//returns emosewa

/* ----------------------------------------------------------------------------------------------------- 
write a recursive function called isPalindrome which returns true if the string passed to it as a palindrome 
(reads the same foward and backward). otherwise return false.
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
*/
function isPalindrome(str) {
  //base case
  //if string has only 1 character, then it is true
  if (str.length === 1) return true;
  //if string has 2 characters, then the second character should be the same as the first
  if (str.length === 2) {
    return str[0] === str[1];
  }
  //if the first char & last char are equal, then slice both off to return the new string
  //then call the function itself to pass in the new string that is sliced off
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  //console.log("first char: ", firstChar);
  //console.log("last char: ", lastChar);
  if (firstChar === lastChar) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

//console.log(isPalindrome("awesome"));
//isPalindrome("tacocat")
//true
//isPalindrome("acoca")
//true
//isPalindrome("coc")
//true
//isPalindrome("o")
//true

/* ----------------------------------------------------------------------------------------------------- 
write a recursive function called someRecursive which accepts an array & a callback. the function returns true if a single value
in the array returns true when passed to the callback. otherwise it returns false.
someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
*/
//Solution 1: mine
function someRecursive(arr, callBck) {
  function callBck(arr) {
    if (arr.length === 0) return arr;
    if (arr[0] !== 0) {
      return true;
    }
  }
  let isOdd = callBck(arr);
  if (isOdd === true) return true;
  return false;
}

//solution 2: udemy
function someRecursive2(arr, cb) {
  if (arr.length === 0) {
    return false;
  }
  if (cb(arr[0])) {
    return true;
  }
  return someRecursive2(arr.slice(1), cb);
}

function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}
//console.log(someRecursive2([4, 6, 8], isOdd));
//someRecursive2([4, 6, 8], isOdd)
//                  isOdd(4) === false
//                  someRecursive2([6, 8], isOdd)
//                                    someRecursive2([6, 8], isOdd)
//                                    isOdd(6) === false
//                                                      someRecursive2([8], isOdd)
//                                                      isOdd(8) === false
//                                                      //returns false
//                                    //returns false
//                   //returns false
//returns false

/* ----------------------------------------------------------------------------------------------------- 
write a recursive function called flatten, which accepts an array of arrays & returns a new array with all values flattened.
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/
function flatten(){

}

/* ----------------------------------------------------------------------------------------------------- */
