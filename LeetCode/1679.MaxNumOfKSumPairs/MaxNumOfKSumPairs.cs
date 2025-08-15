using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.1679.MaxNumOfKSumPairs
{
    public class MaxNumOfKSumPairs
    {
    public int MaxOperations(int[] nums, int k)
    {
        int numOfOperations = 0;

        for (int i = 0; i < nums.Length; i++)
        {
            Console.WriteLine($"what is numms[i]: {nums[i]}");
            if(nums[i] == -1) continue; //skip if it's -1
            for (int j = i + 1; j < nums.Length; j++)
            {
                Console.WriteLine($"what is nums[j]: {nums[j]}");
                if(nums[j] == -1) continue; //skip if it's -1
                if (nums[i] + nums[j] == k)
                {
                    numOfOperations++;
                    Console.WriteLine($"Found a pair: ({nums[i]}, {nums[j]})");
                    //remove the pair 

                    break; // Exit the inner loop after finding a valid pair
                }
            }
        }
        return numOfOperations;
        }
    }
}