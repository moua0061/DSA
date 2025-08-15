using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.1456. MaximumNumOfVowelsInSubstringOfGivenLength
{
    public class MaxNumOfVowelsInSubstringGivenLength
{
    public int MaxVowels(string s, int k) {
        int maxVowels = 0; //keep track of the vowel counts:
        int currentVcount = 0; //need a variable to count the current vowels in substring:

        //add the count of the first window:
        for (int i = 0; i < k; i++) {
            char currentLetter = s[i];
            if (isVowel(currentLetter)) { //if it is a vowel,
                Console.WriteLine($"Found a vowel in first window: {currentLetter}");
                currentVcount++; //increment the current vowel count
            }
        }

        //set maxVowels to the currentVcount:
        maxVowels = currentVcount;

        //count the vowels in each substring within the string with k length
        //start where the first window left off
        for (int i = k; k < s.Length; i++) {
            char currentLetter = s[k];
            if (isVowel(currentLetter)) //if the letter is a vowel,
            {
                Console.WriteLine($"Found a vowel!: {currentLetter}");
                currentVcount++; //increment the current count
            }

            //if the letter leaving the window is a vowel,
            char letterLeaving = s[i - k];
            if (isVowel(currentLetter)) {
                Console.WriteLine($"letter leaving window is a vowel!: {currentLetter}");
                currentVcount--; //decrement the count
            }

            //check if the current count is greater than the maxVowels
            maxVowels = Math.Max(maxVowels, currentVcount);
        }

        //return the maxVowels
        return maxVowels;
    }
        
        public bool isVowel(char letter){
            if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ||){
                return true;
            }
            
            return false;
        }
    }
    
}