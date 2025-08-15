import java.util.*;

public class ContainsDuplicate {
    public static void Main(String[] args){
        int [] nums = {};
        System.out.println("Contains Duplicate: " + solution(nums));
    }

    //solution 1
    public static boolean solution(int[] nums){
        Set<Integer> listOfDuplicates = new HashSet<>();
        for(int num : nums){
            if(listOfDuplicates.contains(num)){
                return true;
            } else {
                listOfDuplicates.add(num);
            }
        }
        return false;
    }

    //solution 2
    public static boolean solution2(int[] nums){
        HashMap<Integer, Integer> listOfDuplicates = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(){
                listOfDuplicates.containsKey(nums[i])
                    return true;
            } else {
                listOfDuplicates.put(nums[i], i)
            }
        }
        return false;
    }
}

///Users/Lia/Desktop/total-wine-assessment/decisionMaker.js
