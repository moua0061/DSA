import java.util.ArrayList;
import java.util.List;

public class Diagonal_Difference {
    public static void main(String[] args) {
        List<List<Integer>> arr = new ArrayList<List<Integer>>();
        arr.add(new ArrayList<>());
        arr.get(0).add(11);
        arr.get(0).add(2);
        arr.get(0).add(4);
        arr.add(new ArrayList<>());
        arr.get(1).add(4);
        arr.get(1).add(5);
        arr.get(1).add(6);
        arr.add(new ArrayList<>());
        arr.get(2).add(10);
        arr.get(2).add(8);
        arr.get(2).add(-12);
        //System.out.println(arr);
        System.out.println(diagonalDifference(arr));
//        11  2  4
//        4   5  6
//        10  8  -12
        //l = 11+5+ -12 = 4
        //r = 4 + 5 + 10 = 19
        //absolute difference |19-4 = 15|
    }

    public static int diagonalDifference(List<List<Integer>> arr) {
        // Write your code here
        System.out.println("what arr looks like: " + arr);
        //need a variable to store my results so i can return it at the end
        //which will be the difference of sum sumLeft - sumRight
        int result = 0;

        //need a variable to hold my sum for the left
        int sumLeft = 0;
        //need a variable to hold my sum for the right
        int sumRight = 0;

        //need to grab indexes:
        //left: 0,0 / 1,1 / 2,2
        //left 1st num will always be the first row, first column 0,0
        //left 2nd num will always be the second row, first column 1,1
        //left 3rd num will always be the third row, third column 2, 2
        //left 4th num will always be the fourth row, fourth column, 3, 3 , etc
        //left = my row will increase along with my column, my row = my column

        //right: 0,2 / 1,1, / 2,0
        //right 1st num will always be first row, last column 1,*
        //right 2nd num will always be second row, last column -1  2, * -1
        //right = my row will increase as my column starts from the end and decrease

        //row will always increase
        //need a nested loop to keep track of my columns, rows
        for(int row = 0; row < arr.size(); row++){
            for(int column = arr.size() -1; column >= 0; column--){
                if(row == column){
                    sumLeft += arr.get(row).get(column);
                }
                if(arr.size() - 1 - row == column){
                    sumRight += arr.get(row).get(column);
                }
            }
        }

        // I need the absolute difference between left & right
        //use the Math.absolute method?
        result = Math.abs(sumLeft - sumRight);
        //System.out.println(result);
        return result;
    }
}
