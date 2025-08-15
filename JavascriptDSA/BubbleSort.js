function bubbleSort(arr){
    //iterating starting from the end of the array to the beginning
    for(let i = arr.length; i > 0; i--){
        //this let us break out of the loop if there are no swaps
        let noSwaps = true

        //the largest value will be pushed to the end of the array
        //there's no need to check/compare whatever value to the last & wahtever values comes next to it
        //therefor, the inner loop should be > than i - 1
        //so it doesn't compare to the previous values that it already did
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

const arr = [ 34, 4, 2, 89, 22, 34]
console.log(bubbleSort(arr))