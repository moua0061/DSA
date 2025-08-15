using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.1456. MaximumNumOfVowelsInSubstringOfGivenLength
{
    public class MaxNumOfVowelsInSubstringGivenLength
    {
        public int MaxVowels(string s, int k) {
            //keep track of the vowel counts:
            int maxVowels = 0;

            //need a tuple of vowels to loop thru
            //char[] vowels = { 'a', 'e', 'i', 'o', 'u' }; 

            //sliding window with k as the length:
            //need a variable to count the current vowels in substring:
            int currentVcount = 0;
            //start at index 0
            int start = 0;
            //end at index k
            int end = k;
            //count the vowels in each substring within the string with k length
            for (int i = start; end < s.Length; i++)
            {
                //Console.WriteLine($"What is current substring: {s[i]}");
                int theVowel = s[i].ToLower();
                if (theVowel == 'a' || theVowel == 'e' || theVowel == 'i' || theVowel == 'o' || theVowel == 'u')
                {
                    //if it's a vowel, increment the current count
                    currentVcount++;
                }
            }
            //check if the current count is greater than the maxVowels
            //set current count if greater than maxVowels

            //return the maxVowels
            return maxVowels;
        }
    }
}