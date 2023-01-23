package svpablo.nd2a;
/**
 *
 * @author OmeiG
 */
public class stackTest {
    public static int arr[];
    public static int size;
    static public int top = 0;
    
    public stackTest(int s) {
    size = s;
    arr = new int[s];
    }
    
    public int push(int element) {
        if (isFull()) {
        System.out.print("Stack is full"); }
        else {
        System.arraycopy(arr, 0, arr, 1, size-1);
        arr[0] = element;
        }
        return 0;
}
    
    public int pop() {
        if (isEmpty()) {
            System.out.print("Stack is empty");
        }
        System.out.print(" " + arr[0] + " ");
        System.arraycopy(arr, 1, arr, 0, size-1);
        return 0;
    }

    public boolean isEmpty() {
        if (arr[top] == 0) {
            return true;
        }
        else
            return false;
    }

    public static boolean isFull() {
        if (top == size) {
        return true;
        }
        else
        return false;
        }

    public int peek() {
        return arr[0];
    }

    public int sizeCount(){
        int i = 0;
        while (arr[i] != 0){
            i++;
        }
        return i;
    }
    
    public static void main(String[] args) {
        Act6B_Pablo_ND2A stack = new Act6B_Pablo_ND2A(10);
        stack.push(25);
        stack.push(5);
        stack.push(10);
        stack.push(32);
        stack.push(90);
        
        System.out.print("+ My Stack Operations + \n "
                + "\n   1. Size of stack after push operations: " + stack.sizeCount()
                + "\n   2. Top of the Stack: " + stack.peek()
                + "\n   3. Pop elements from stack: ");
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        System.out.print("\n   4. Size of stack after pop operations: " + stack.sizeCount());
    }
}