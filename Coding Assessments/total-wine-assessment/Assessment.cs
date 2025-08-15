using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assessment
{
    public class Assessment
    {
        public static void Main(string[] args)
        {
            //2, 1, 3, 0, 1, 5, 0, 0, 6, 7
            Console.WriteLine(GetSpottingMetric(new int[] { 2, 0, -3, 0, 0, 5, 78, 0, -6, -7 }));
        }

        public static double GetSpottingMetric(int[] results)
        {
            double total = 0;
            int goodMeasureCount = 0;

            for (int i = 0; i < results.Length; i++)
            {
                Console.WriteLine($"what is results[i]: {results[i]}");

                if (results[i] > 0)
                {
                    total += results[i];
                    goodMeasureCount++;
                    Console.WriteLine($"Total: {total}, Good Measure Count: {goodMeasureCount}");

                    if (goodMeasureCount == 3)
                    {
                        double avg = total / goodMeasureCount;
                        Console.WriteLine($"Average: {avg}");
                        return avg;
                    }
                }
            }
            return goodMeasureCount > 0 ? total / goodMeasureCount : 0;
        }
    }
}