import java.util.*;

public class Lonely_Integer {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>(Arrays.asList(1,2,3,4,3,2,1));
        //4
        System.out.println(lonelyInteger(arr));
    }

    public static int lonelyInteger(List<Integer> a) {
        // Write your code here
        // need to declare a hashmap
        // need a variable to put the key in so I can return it in the end

        int result = 0;

        HashMap<Integer, Integer> listOfNums = new HashMap<>();
        // loop thru the array list
        // put each number in a hash map w/keys & values pair
        /**
         * {
                1: 0,
                2: 0,
                3: 0,
                4: 0
         * }
         **/
        for(int num : a){
            if(listOfNums.containsKey(num)){
                //counter++;
                listOfNums.put(num, listOfNums.get(num) +1);
            } else {
                listOfNums.put(num, 1);
            }
        }
        //where the numbers will be the keys & the count will be the value

        //then loop thru the hashmap
//        listOfNums.forEach((k, v) -> {
//            if(v < 2){
//                result = k;
//            }
//        });
        for(Map.Entry<Integer, Integer> entry : listOfNums.entrySet()){
            int v = entry.getValue();
            if(v < 2){
                result = entry.getKey();
            }
        }
        // if the value is 1, return that key
        return result;
    }
}
