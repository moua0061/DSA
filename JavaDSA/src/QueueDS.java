import java.util.Queue;
import java.util.LinkedList;

public class QueueDS {
    //psvm shortcut
    public static void main(String[] args) {
        // queue - FIFO data structure - first in, first out (first come, first serve)
        //      example: line of people
        //      a collection designed for holding elements prior to processing
        //      linear data structure

        // add = enqueue, offer()
        //      adding to the tail end of the line
        // remove = dequeue, poll()
        //      removing the head of the line

        // usages?
        //1. keyboard buff (letters should appear on the screen in the order they're pressed)
        //2. printer queue (print jobs should be completed in order)
        //3. used in LinkedLists, PriorityQueue, Breadth-first search

        //Queue is an interface = therefore, you cannot make an instance of it
        //therefore, you can instantiate a LinkedList instead
        Queue<String> queue = new LinkedList<String>();
        //we inherit 3 methods from the parent class
        //1. add() = offer()
        //2. remove() = poll()
        //3. element() = peek()

        //enqueue: as we add, the next one gets added and the last one added will be at the tail which is Harold
        queue.offer("karen");
        queue.offer("chad");
        queue.offer("steve");
        queue.offer("harold");

        //peek() will examine and return the head of the line which returns 'karen' since she is first in line
        //System.out.println(queue.peek());

        //dequeue: removing the first item in line which will be Karen then chad, then steve, etc
        //returns the object that was removed
        //System.out.println(queue.poll());
        //poll() will not return an Exceptions if the list is empty but if you use element(), it will throw an Exception

        //other methods inherited from Collections:
        //1. isEmpty() - returns boolean if queue is empty
        //2. size() - returns an integer , the count of items in our queue
        //3. contains() - returns boolean if the item is in our queue
        System.out.println(queue.contains("Chad"));
    }
}
