public class MergeStrings {
   public string MergeAlternately(string word1, string word2) {
       StringBuilder finalResults = new StringBuilder();
       int maxLength = Math.Max(word1.Length, word2.Length);
       //Console.WriteLine(maxLength);


       for(int i = 0; i < maxLength; i++){
           if(i < word1.Length){
               char word1Char = word1[i];
               finalResults.Append(word1Char);
           }


           if(i < word2.Length){
               char word2Char = word2[i];
               finalResults.Append(word2Char);
           }
       }


       return finalResults.ToString();
   }
}
