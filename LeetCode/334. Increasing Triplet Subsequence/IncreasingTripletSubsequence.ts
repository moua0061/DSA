function increasingTriplet(nums: number[]): boolean {
    //ex1:[1,2,3,4,5]
    //1 < Number.MAX_VALUE? = t; first = 1
    //2 < Number.MAX_VALUE? = t; second = 2
    //3 < 1? = f; next else if
    //3 < 2? = f; next else
    //return true;
    //need loop
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= first){
            first = nums[i];
        } else if(nums[i] <= second){
            second = nums[i];
        } else {
            return true; //found the triplet
        }
    }
    return false;
};