import java.util.List;

public class ReverseVowelsOfString {
    public String reverseVowels(String s) {
        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');
        List<Character> vowelsInS = new ArrayList<>();
        StringBuilder results = new StringBuilder();
        for(int i = 0; i < s.length(); i++){
            char currentLetter = s.charAt(i);
            boolean doesContainVowel = vowels.contains(currentLetter);
            if(doesContainVowel){
                vowelsInS.add(currentLetter);
            }
        }
        char[] copyOfS = s.toCharArray();
        //System.out.println("what is copyOfS:" + new String(copyOfS));
        int vowelIndex = vowelsInS.size() - 1;
        //System.out.println("what is vowelIndex:" + vowelIndex);
        for(int i = 0; i < s.length(); i++){
            char currentLetter = s.charAt(i);
            boolean doesContainVowel = vowels.contains(currentLetter);
            if(doesContainVowel){
                //System.out.println(doesContainVowel);
                copyOfS[i] = vowelsInS.get(vowelIndex);
                vowelIndex--;
            }
        }
        //System.out.println("what is copyOfS:" + new String(copyOfS));
        return new String(copyOfS);
        }
}
