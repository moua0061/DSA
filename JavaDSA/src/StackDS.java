import java.util.Stack;


public class StackDS {

    public static void main(String[] args) {
        //stack = LIFO data structure = last in, first out
        //        stores objects into a sort of 'vertical tower'
        //
        //5 unique methods:
        //1. push() to add to the top
        //2. pop() to remove from the top
        //3. empty() returns a boolean if the stack is empty
        //4. peek() the item at the top of the stack
        //5. search() search the stack for an item

        //uses of stacks:
        //1. undo/redo features in text editors
        //2. moving back/forward thr browser history
        //3. backtracking algorithms (maze, file directories)
        //4. calling functions (call stack)

        Stack<String> stack = new Stack<String >();
        //short cut (sout)
        //System.out.println(stack.empty());
        //returns true since our stack is empty

        stack.push("minecraft");
        stack.push("skyrim");
        stack.push("doom");
        stack.push("borderlands");
        stack.push("ffvii");

        //System.out.println(stack.empty());
        //returns false now that our stack is NOT empty
        //String myFavGame = stack.pop(); //returns the object that is being removed
        //stack.peek() returns the item on the top
        //stack.search("doom") returns the index of the item you're looking for , if item is not in the stack , it will return -1
        System.out.println(stack.search("doom"));

        //if the stack is empty, it will throw an Exceptions
    }
}
