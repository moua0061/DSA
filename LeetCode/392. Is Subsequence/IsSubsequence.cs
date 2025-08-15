using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeetCode.392. Is Subsequence
{
    public class IsSubsequence
{
    public bool IsSubsequence(string s, string t)
    {
        int sPointer = 0;
        int tPointer = 0;

        while (tPointer < t.Length && sPointer < s.Length)
        {
            if (s[sPointer] == t[tPointer])
            {
                sPointer++;
                tPointer++;
            }
            else
            {
                tPointer++;
            }
        }

        return sPointer == s.Length;
        }
    
    }
}