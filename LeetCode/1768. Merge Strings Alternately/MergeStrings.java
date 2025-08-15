import java.util.*;

public class MergeStrings {
    public static void Main(String[] args){
        String word1 = "";
        String word2 = "";
        mergeAlternately(word1, word2);
        mergeAlternately2(word1, word2);
    }

    public static String mergeAlternately(String word1, String word2) {
        StringBuilder finalResults = new StringBuilder();
        int maxLength = Math.max(word1.length(), word2.length());
        //need a for loop to iterate thru each char for both words
        for(int i = 0; i < maxLength; i++){
            //if i < each word's length:
            //declare a variable for char from word1
            //declare a variable for char from word2
            //append both varibles and set them to the finalResults variable
            if(i < word1.length()){
                char word1Char = word1.charAt(i);
                finalResults.append(word1Char);
            }
            if(i < word2.length()){
                char word2Char  = word2.charAt(i);
                finalResults.append(word2Char);
            }
        }
        return finalResults.toString();
    }

    public static String mergeAlternately2(String word1, String word2) {
        StringBuilder finalResults = new StringBuilder();
        if(word1.length() == word2.length()){
            //when both are equal:
            for(int i = 0; i < word1.length(); i++){
                char word1Char = word1.charAt(i);
                char word2Char = word2.charAt(i);
                finalResults.append(word1Char);
                finalResults.append(word2Char);
            }
        } else if(word1.length() < word2.length()){
            //when word1 is less than word2:
            //StringBuilder results = loopAndMerge(word1, word2);
            finalResults.append(loopAndMerge(word1, word2, word1.length()));
            finalResults.append(appendLastChar(word2, word1));
        } else {
            //when word2 is less than word1:
            finalResults.append(loopAndMerge(word1, word2, word2.length()));
            finalResults.append(appendLastChar(word1, word2));
        }
        return finalResults.toString();
    }

    public static StringBuilder loopAndMerge(String word1, String word2, int length){
        StringBuilder finalResults = new StringBuilder();
        for(int i = 0; i < length; i++){
            char word1Char = word1.charAt(i);
            char word2Char = word2.charAt(i);
            finalResults.append(word1Char);
            finalResults.append(word2Char);
        }
        return finalResults;
    }

    public static StringBuilder appendLastChar(String word2, String word1){
        StringBuilder finalResults = new StringBuilder();
        int difference = word2.length() - word1.length();
        String lastChars = word2.substring(word2.length() - difference);
        finalResults.append(lastChars);
        return finalResults;
    }
}
