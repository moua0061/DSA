package HackerRank.2;

public     public static int compareStrings(String s1, String s2) {
    // Write your code here
        StringBuilder s1Result = removeSpecialChar(s1);
        StringBuilder s2Result = removeSpecialChar(s2);
        //System.out.println(s1Result);
        //System.out.println(s2Result);
        if(s1Result.length() != s2Result.length()){
            return 0;
        } else {
            for(int i = 0; i < s1Result.length(); i++){
                char s1c = s1Result.charAt(i);
                char s2c = s2Result.charAt(i);
                if(s1c == s2c){
                    continue;
                } else {
                    return 0;
                }
            }
            return 1;
        }
        //return 1;
    }
    
    private static StringBuilder removeSpecialChar(String str){
        StringBuilder result = new StringBuilder();
        for(int i = 0; i < str.length(); i++){
            char c = str.charAt(i);
            if(c != '#'){
                result.append(c);
            }
        }
        return result;
    } {
    
}
