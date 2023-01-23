import java.util.*;

public class fibonnacciTest {
    
    public static long fibonnacciOne = 0;
    public static long fibonnacciTwo = 1;
    public static long fibonnacciNext;
    public static long n = 0;
   
    public static long fibIteration(int i){
        // fibonnacci sequence, iteration method
            for (int k = 0; k < i; k++ ){
                    fibonnacciNext = fibonnacciOne + fibonnacciTwo;
                    fibonnacciOne = fibonnacciTwo;
                    fibonnacciTwo = fibonnacciNext;
            }
        return fibonnacciOne;
    }
    
    public static long fibRecursive(int i){
        // fibonnacci sequence, recursive method
            if (n < i){
                fibonnacciNext = fibonnacciOne + fibonnacciTwo;
                fibonnacciOne = fibonnacciTwo;
                fibonnacciTwo = fibonnacciNext;
                fibRecursive(i-1);
            }
        return fibonnacciOne;
    }
    
    public static void resetVar(){
        // reset variables to default state
        fibonnacciOne = 0; 
        fibonnacciTwo = 1;
        fibonnacciNext = 0;
        n = 0;
    }
    
    public static void main(String[] args){
        
        Scanner myObj = new Scanner(System.in);
        System.out.print("Enter value of i: ");
        long i = myObj.nextLong();
        
        System.out.println("Fibonnaci number " + i + " is " + fibIteration((int) i) + " --> This is displayed through Interative Method.");
        
        resetVar();
        
        System.out.println("Fibonnaci number " + i + " is " + fibRecursive((int) i) + " --> This is displayed through Recursive Method.");
        
        
    }
    
}
