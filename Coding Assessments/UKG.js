// Given a String `s`, write an algorithm that determine if the String is a palindrome.
//
// Input : "abba", Output : True
// Input : "Geeks", Output: False
const s = "A man, a plan, a canal. Panama!";
// console.log(reverse(s));

function reverse(s) {
  //base case
  if (s === "") {
    return s;
  }
  if (s.length === 1) {
    return true;
  }
  if (s.length === 2) {
    if (s[0] === s[1]) {
      return true;
    }
  }
  //abba
  return reverse(s.substring(1, s.length - 1));
}

function reverse2(s) {
  let firstPointer = 0;
  let secondPointer = s.length - 1;
  //console.log(secondPointer)
  //console.log(s[firstPointer], s[secondPointer])
  while (firstPointer < secondPointer) {
    if (s[firstPointer] === s[secondPointer]) {
      //do nothing keep going
      firstPointer++;
      secondPointer--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(reverse2(s));
//reverse("bb")
//true
//reverse("aabbaa")
//true

// abba. sub(1,3) => bb

const s = "A man, a plan, a canal. Panama!";
// AmanaplanacanalPanama
// Remove specials chars
