import java.util.Stack;

public class Valid_Parentheses {
    public static void main(String[] args) {
        String s = "{()}";
        System.out.println(isValid(s));
    }

    public static boolean isValid(String s) {
        Stack<Character> parentheseStack = new Stack<>();

        if(s.length() == 1){
            return false;
        }

        for(char c : s.toCharArray()){
            if(c == '(' || c == '{' || c == '['){
                parentheseStack.push(c);
            }
            if(c == ')' && (parentheseStack.empty() || parentheseStack.pop() != '(')){
                return false;
            }
            if(c == '}' && (parentheseStack.empty() || parentheseStack.pop() != '{')){
                return false;
            }
            if(c == ']' && (parentheseStack.empty() || parentheseStack.pop() != '[')){
                return false;
            }
        }
        return parentheseStack.isEmpty();
    }
}
