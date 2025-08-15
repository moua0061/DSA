import org.w3c.dom.ranges.Range;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Factors_of_3_and_5 {
    public static void main(String[] args) {
        long low = 200;
        long high = 405;
        System.out.println(getIdealNums(low, high));
    }

    public static long getIdealNums(long low, long high)
    {
        //need a variable to keep track of my count
        int count = 0;
        //factors of 3: 3^x
        //i need to find the factors of 3
        double factorsOf3 = 0;
        //factors of 5: 5^y
        //i need to find the factors of 5
        double factorsOf5 = 0;
        //I'm going to put the max constraints in a variable
        long max = 2000000000;
        //I need a variable for the product of factors of 3 & factors of 5
        double productOf3and5 = 0;
        //I can start x & y at 0 and increase as I loop until the max
        //i can use Math.pow()method
        //start with a loop with i to equal 1 because starting at 0 power equals 3

        //start with an edge case:
        //if the low & high are both 1, return 1
//        if(low == 1 && high == 1){
//            count = 1;
//        }

//        for(double i = 1; i < 10; i++){
//            //1: 3
//            //2: 3*3 = 9
//            //3: 3*3*3 = 27
//            factorsOf3 = Math.pow(3, i);
//            factorsOf5 = Math.pow(5, i);
//            //find the product of factors of 3 & factors of 5
//            //may have to cast it to long outside of the loop when I'm done
//            productOf3and5 = factorsOf3 * factorsOf5;
//            System.out.println(productOf3and5);
//            //check to see if the product is within range of the low & high
//            //can I use the Range<Long> method?
//            //Use if statements first
//            //if the product of 3 & 5 is greater than low AND less than high
//            //increment the count
//            if(productOf3and5 >= low && productOf3and5 <= high){
//                count++;
//            }
//        }
        //the above loop only works with a constant i , it doesn't go through a variety of the product of 3 and 5
        //therefore, I can put the product in a hashmap as key value pairs
        //what if i do a nested loop with using x & y
        //go thru 3^x times 5^y first and then loop thru back with 5?
        //3^1 * 5^1 = 15,
        //3^2 * 5^1 = 45
        //3^3 * 5^1 = 135, etc
        //3^4 * 5^1 = 405, count = 1

        //to see if the product is grater than low and less than high
        for(int x = 0; x < 10; x++){
            for(int y = 0; y < 10; y++){
                factorsOf3 = Math.pow(3, x);
                factorsOf5 = Math.pow(5, y);
                productOf3and5 = factorsOf3 * factorsOf5;
                //System.out.println(productOf3and5);
                if(productOf3and5 >= low && productOf3and5 <= high){
                    count++;
                }
            }
        }
//        double test = 17.56;
//        double test2 = 100.0;
//        System.out.println(test*test2);
//        System.out.println((long) (test * test2));
//        System.out.println(Math.round(test * test2));
        System.out.println("final count: " + count);

        return Math.round(count);
    }
}
