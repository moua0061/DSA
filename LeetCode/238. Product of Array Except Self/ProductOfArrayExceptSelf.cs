using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 238. Product of Array Except Self
{
    public class ProductOfArrayExceptSelf
    {
        public int[] ProductExceptSelf(int[] nums) {
            //product = mutiplication
            //multiply all elements in the array except nums[i]
            //product must fit 32-bit => int
            int[] results = new int[nums.Length];

            //O(n) = no nested loop
            //2 separate loops
            //one calculating the left side
            //nothing to the left at the start
            //[1,2,3,4]
            //result = [1,1,2,0]
            results[0] = 1; //1 becuase 1 * n will be itself & nothing to the left
            for(int i = 1; i < nums.Length; i++){
                //i = 3, 4
                results[i] = results[i - 1] * nums[i - 1]; //results[3] = 2 * 3 = 6
                //result = [1,1,2,6]
            }

            //one calculating the right side
            //nothing to the right at the start
            int rightProd = 1; //rightProd = 24
            //[1,2,3,4]
            //result = [1,12,8,6]
            for(int i = nums.Length -1 ; i >= 0; i--){
                //i = 0, 1
                results[i] = results[i] * rightProd; //results[0] = 1 * 24 = 24
                rightProd *= nums[i]; //24 * 1 = 24
                //result = [24,12,8,6]
            }

            return results;
        }
    }
}