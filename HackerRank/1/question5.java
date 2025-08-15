public static char maximumOccurringCharacter(String text) {
    // Write your code here
        Map<Character, Integer> charFeqMap = new HashMap<Character,Integer>();
        
        for(int i = 0; i < text.length(); i++){
            char charr = text.charAt(i);
            charFeqMap.put(charr, charFeqMap.getOrDefault(charr, 0) + 1);
        }
        //System.out.println(charFeqMap);
        
        char maxChar = text.charAt(0);
        int maxFreq = 0;
        
        for(Map.Entry<Character, Integer> entry : charFeqMap.entrySet()){
            //System.out.println(entry);
            char currentChar = entry.getKey();
            int currentFreq = entry.getValue();
            
            if(currentFreq > maxFreq){
                maxChar = currentChar;
                maxFreq = currentFreq;
            }
        }
        
        return maxChar;
    }