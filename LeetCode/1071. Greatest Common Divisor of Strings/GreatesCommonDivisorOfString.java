import java.util.*;

public class GreatesCommonDivisorOfString {
    public static void Main(String[] args){
        String word1 = "";
        String word2 = "";
        gcdOfStrings(word1, word2);
    }
    
    public static String gcdOfStrings(String str1, String str2) {
        String x = "";
        for(int i = 0; i < str2.length(); i++){
            char currentChar = str2.charAt(i);
            x += currentChar;
            boolean doesXdivideStr1 = divides(str1, x);
            boolean doesXdivideStr2 = divides(str2, x);
            if(doesXdivideStr1 && doesXdivideStr2) return x;
        }
        return "";
    }

    private static boolean divides(String s, String t){
        String results = "";
        while(results.length() <= s.length()){
            if(s.equals(results)){
                return true;
            } 
            results += t;
        }
        return false;
    }
}
