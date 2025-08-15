function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    //have an array with booleans as a result 
    //go thru each kid with candies
    //then see who has the most candies out of them all
    //then set the max count to that kid with the candies
    //then add the extr candies to each kids candies to get the total 
    //check if the total the kid has is greater than the max count we set it to
    //capture the result in the result array
    let results: boolean[] = [];
    let maxCandiesCount = 0;
    for(let i = 0; i < candies.length; i++){
        const currentKidWithCandies = candies[i];
        maxCandiesCount = Math.max(currentKidWithCandies, maxCandiesCount);
    }
    
    candies.forEach(kid => {
        const topGun: boolean = kid + extraCandies >= maxCandiesCount;
        results.push(topGun);
    })
    return results;
};