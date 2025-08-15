function findMaxAverage(nums: number[], k: number): number {
    let sum:number = 0;

    for(let i = 0; i < k; i++){
        sum += nums[i];
    }

    let maxSum:number = sum;
    let start:number = 0;
    let end:number = k;

    while(end < nums.length){
        sum -= nums[start];
        start++

        sum += nums[end];
        end++

        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};