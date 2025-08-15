/*
 Given a square matrix, calculate the absolute difference between the sums of its diagonals.For example, the square matrix arr is shown below:
 123
 456
 989
 The left-to-right diagonal = 1+5+9 =15. The right to left diagonal = 3+5+9=17. Their absolute difference is 15 - 17 = 2.
 */
function diagonalDifference(arr) {
    let pointer = 0
    let pointer2 = arr.length - 1
    let total1 = 0
    let total2 = 0

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i][pointer]
        //console.log(x)
        total1 += x
        pointer++
        let y = arr[i][pointer2]
        pointer2--
        total2 += y
        //console.log(y)
    }
    //console.log(total1, total2)
    return Math.abs(total1 - total2)
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
console.log(diagonalDifference(matrix))
