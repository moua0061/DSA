function productExceptSelf(nums: number[]): number[] {
    let results: number[] = [];

    results[0] = 1;
    //3
    //[1,2,3,4]
    //[1,1,2,6]
    for(let i = 1; i < nums.length; i++){
        //1*2
        results[i] = results[i-1] * nums[i - 1];
    }

    //[1,2,3,4]
    //[1,1,8,6]
    let rightProduct = 1; //12
    for(let i = nums.length - 1; i >= 0; i--){
        results[i] = results[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return results;
};