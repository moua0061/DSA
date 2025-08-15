using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 1431. Kids With Greatest Candies
{
    public class KidsWithGreatesetCandies
    {
        //have an array with booleans as a result 
        //go thru each kid with candies
        //then see who has the most candies out of them all
        //then set the max count to that kid with the candies
        //then add the extr candies to each kids candies to get the total 
        //check if the total the kid has is greater than the max count we set it to
        //capture the result in the result array
        public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
            IList<bool> results = new List<bool>();
            qint maxCandiesCount = 0;

            for(int i = 0; i < candies.Length; i++){
                //Console.WriteLine(candies[i]);
                int kidWithCandies = candies[i];
                maxCandiesCount = Math.Max(kidWithCandies, maxCandiesCount);
            }
            //Console.WriteLine($"{maxCandiesCount}");

            foreach(var kid in candies){
                //Console.WriteLine($"{kid}");
                bool topGunn = kid + extraCandies >= maxCandiesCount;
                results.Add(topGunn);
            }
            return results;
        }
    }
}