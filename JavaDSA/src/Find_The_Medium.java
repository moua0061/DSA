import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Find_The_Medium {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>(Arrays.asList(45, 6, 12, 98, 353, 32, 21));
        //6, 12, 21, 32, 45, 98, 353
        System.out.println(findMedian(arr));
    }
    public static int findMedian(List<Integer> arr) {
        // Write your code here
        // to find the medium, length / 2

        //need a variable to hold the size of the array
        //need a variable to hold the medium

        int length = arr.size();
        double medium = 0;
        int result;

        // need to round down to get the medium
        // need a double type to hold the medium as i divide it by 2
        double gettingTheMedium = length/2;
        medium = Math.floor(gettingTheMedium);

        //sort the array
        //Arrays.sort(arr);
        Collections.sort(arr);

        return result = arr.get((int) medium);
    }
}
