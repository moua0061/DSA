import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Min_Max_Sum {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 5));
        //what if a number repeated inside the array????
        runDemo(arr);
    }
    public static void runDemo(List<Integer> arr) {
        // Write your code here
        // need a variable to hold a min
        // need a variable to hold a max
        long totalSum = 0;
        //need 2 separate loop
        //first loop, loops thru each number to add them to get a sum
        for(int num : arr){
            totalSum += num;
        }
        long min = totalSum;
        long max = 0;

        //second loop, loops thru each number inside the array excluding the number i'm not counting
        for(int i = 0; i < arr.size(); i++){
            //need a variable to hold the number I'm not counting
            //need a variable to hold the sum (the sum will change)
            int numberImNotCounting = arr.get(i);
            int spotImNotCounting = i;

            long sum = 0;
            for(int j = 0; j < arr.size(); j++){
                long currentNum = arr.get(j);

                if(currentNum != numberImNotCounting){
                    //if the current number is not the number I'm counting,
                    //add the current num to the sum
                    //else do nothing
                    sum += currentNum;
                } else {
                    // else do nothing
                }
            }
            //and if that sum is < min, make that sum the new minimum
            if(sum < min){
                min = sum;
            }
            //and if that sum is > max, make that sum the new maximum
            if(sum > max){
                max = sum;
            }

        }
        System.out.println(min + " " + max);
        //print min & max
    }
}
