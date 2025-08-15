import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Counting_Sort_1 {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>(Arrays.asList(1, 1, 3, 2, 1));
        System.out.println(countingSort(arr));
    }

    public static List<Integer> countingSort(List<Integer> arr) {
        // Write your code here
        //need an array list to return my results from my frequency array
        List<Integer> results = new ArrayList<>();
        //need an int array to put all my numbers in there , size is 100 per hacker rank
        //loop thru each number in arr and increment it as an index to my new array
        //newarray[number]++
        int[] frequencyArr = new int[100];
        for(int number : arr){
            frequencyArr[number]++;
        }
        //loop thru the array list to add the frequency array to it
        for(int i = 0; i < 100; i++){
            results.add(frequencyArr[i]);
        }
        return results;
    }
}
