const nums = [0,1,0,3,12]
moveZeroes(nums);

/**
 Do not return anything, modify nums in-place instead. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
function moveZeroes(nums: number[]): void {
    //0,0,1
    //0 -> pointer A = 0, pointer B = 2
    //0 == 0, splice & push -> 0,1,0
    //pointer B decrement = 1, pointer A stays the same = 0
    //0,1,0
    //0 == 0, splice & push -> 1,0,0
    //pointer B decremement = 0, pointer A stays the same = 0


    //pointer A
    //pointer B
    //pointer A starts at 0, pointer B starts at the end of the array
    //pointer A only moves if the value is not 0 
    //pointer B moves after push 0 to the end of array
    let pointerB = nums.length - 1;
    let pointerA = 0;
    while (pointerA < pointerB) {
        if (nums[pointerA] === 0) {
            nums.splice(pointerA, 1);
            nums.push(0);
            pointerB--;
        } else {
            pointerA++;
        }
    }
    //0,0,1
    //0 -> 0, splice and push -> 0,1,0
    //1 -> != 0, continue -> 0,1,0
    //0 -> 0, splice and push -> 0,1,0
    //nums.forEach((num, index) => {
        // if (num === 0){
        //     nums.splice(index, 1);
        //     nums.push(0);
        // }
    //})
};
