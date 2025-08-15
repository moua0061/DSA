using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.283. Move Zeroes
{
    /// <summary>
    ///  Do not return anything, modify nums in-place instead. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    /// </summary>
    public class MoveZereos
{
    public void MoveZeroes(int[] nums)
    {
        //0,0,1, a = 0 , b = 0 
        //0 -> 0 != 0 -> B increment & A stays the same 
        //b = 1, a = 0
        //0,0,1
        //0 -> 0 != 0 -> B increment & A stays the same 
        //b = 2, a = 0
        //1 -> 1 != 0 -> set nums[a] to nums[b] -> increment both A & B
        //b = 3, a = 1
        //1,0,1
        //b > nums.Length -> breaks out of while loop
        //
        int pointerA = 0;
        int pointerB = 0;
        while (pointerB < nums.Length)
        {
            if (nums[pointerB] != 0)
            {
                nums[pointerA] = nums[pointerB]; //set the value at pointerA to the value at pointerB
                //nums[pointerB] = 0; //set the value at pointerB to 0
                pointerA++;
                pointerB++;
            }
            else
            {
                pointerB++;
            }
        }

        //fill the rest of the arrays with 0's starting from pointer A
        while (pointerA < nums.Length)
        {
            nums[pointerA] = 0;
            pointerA++;
        }
    }
}
}