using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 334. Increasing Triplet Subsequence
{
    public class IncreasingTripletSubsequent
{
    public bool IncreasingTriplet(int[] nums)
    {
        int first = int.MaxValue, second = int.MaxValue;
        foreach (int num in nums)
        {
            if (num <= first)
            {
                first = num; //first triplet
            }
            else if (num <= second)
            {
                second = num; //second triplet
            }
            else
            {
                return true; //third triplet found
            }
        }
                return false; //no triplet found
    }
    }
}