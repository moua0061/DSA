using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace 151. Reverse Words in a String
{
    public class ReverseWordsInaString
    {
        public string ReverseWords(string s) {
            // string[] strArr = s.Split(' ', StringSplitOptions.RemoveEmptyEntries); //StringSplitOptions is an enumeration that specifies how to split the string
            // Array.Reverse(strArr); //Reverses the order of the elements in the entire one-dimensional array
            // string newStr = string.Join(" ", strArr);

            // foreach(string word in strArr){
            //     Console.WriteLine($"what is word in strArr: '{word}'");
            // }

            // Console.WriteLine($"what is newStr: '{newStr}'");

            // return newStr; //run time beats 100%
            //space beats 59%

            return string.Join(" ", s.Split(' ', StringSplitOptions.RemoveEmptyEntries).Reverse());
        }
    }
}