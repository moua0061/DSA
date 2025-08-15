using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.443. String Compression
{
    public class StringCompression
{
        
        public int Compress(char[] chars) {
            int pointerA = 0;
            int pointerB = 0;

            while(pointerB < chars.Length){
                //Console.WriteLine("you're in the while loop!");
                int counter = 0;
                char currentChar = chars[pointerB];
                
                while(pointerB < chars.Length && chars[pointerB] == currentChar){
                    //Console.WriteLine("you're in the while loop!");
                    pointerB++;
                    counter++;
                }

                chars[pointerA] = currentChar;
                pointerA++;

                if(counter > 1){
                    string countStr = counter.ToString();
                    foreach(char num in countStr){
                        chars[pointerA] = num;
                        pointerA++;
                    }
                }
            }
            return pointerA;
        }
    }
}