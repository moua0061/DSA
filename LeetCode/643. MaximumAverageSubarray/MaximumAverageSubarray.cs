using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.643. MaximumAverageSubarray
{
    public class MaximumAverageSubarray
    {
        //SLIDING WINDOW:
        public double FindMaxAverage(int[] nums, int k)
        {
            int sum = 0;
            //outer loop - loops thru the size of nums.Length
            for (int i = 0; i < k; i++)
            {
                sum += nums[i];
            }

            Console.WriteLine($"what is starting sum:{sum}");

            //set the maxAvg to the sum
            int maxAvg = sum;
            Console.WriteLine($"what is maxAvg before:{maxAvg}");
            //start index of the sliding window
            int start = 0;
            //end index of the sliding window
            int end = k;

            //while the end is less than the length of the nums array
            while (end < nums.Length)
            {
                //subtract the first element of the window 
                sum -= nums[start];
                //then increment the start index
                start++;
                //then add the next element
                sum += nums[end];
                //then increment the end index
                end++;
                //then check if the current sum is greater than the maxAvg
                //if yes, set the maxAvg to the current sum
                Console.WriteLine($"what is sum:{sum}");
                maxAvg = Math.Max(maxAvg, sum);
                Console.WriteLine($"what is maxAvg after:{maxAvg}");
            }

            return (double)maxAvg / k;
        }
    }
}