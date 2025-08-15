import java.util.*;

public class KidsWithGreatestCandies {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        //have an array with booleans as a result 
        List<Boolean> results = new ArrayList<Boolean>();

        int maxCandiesCount = 0;
        //go thru each kid with candies
        for(int i = 0; i < candies.length; i++){
            //System.out.println(candies[i]);
            int currentKid = candies[i];

            //then see who has the most candies out of them all
            //then set the max count to that kid with the candies
            maxCandiesCount = Math.max(currentKid, maxCandiesCount);
        }

        //check if the total the kid has is greater than the max count we set it to
        for(int kid : candies){
            //System.out.println(kid);
            boolean topGunn = kid + extraCandies >= maxCandiesCount;
            results.add(topGunn);
        }
        return results;
    }
}
