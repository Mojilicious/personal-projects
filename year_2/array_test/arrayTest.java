package svpablo.nd2a;
import java.util.*;

public class arrayTest {
    
    // Option 1: Input a value
    
    public static void insertItem(int arraySize, int[] listNumber){
        for (int i = 0; i <= arraySize -1 ; i++) {
            if (listNumber[i] == 0) {
            } else if (listNumber[i] != 0 && i == arraySize -1) {
                System.out.println("The array is already full!");
                return;
            }
        }
        
        Scanner myObj = new Scanner(System.in);
        System.out.print("Enter element to be inserted (any value but 0): ");
        int insertElement = myObj.nextInt();
        int insertLocation = findLocationInsert(arraySize, listNumber);
        listNumber[insertLocation] = insertElement;
    }
    
    public static int findLocationInsert(int arraySize, int[] listNumber){
        for (int i = 0; i <= arraySize -1 ; i++ ) {
            if (listNumber[i] == 0) {
                int insertLocation = i;
                return insertLocation;
            }
        }
        return 0;
    }
      
    // Option 2: Delete a value
    
    public static void deleteItem(int arraySize, int[] listNumber){
        for (int i = 0; i <= arraySize -1 ; i++) {
            if (listNumber[i] == 0) {
                System.out.println("The array is empty.");
                return;
            } else {
                break;
            }
        }
        
        Scanner myObj = new Scanner(System.in);
        System.out.print("Enter element to be deleted: ");
        int removeElement = myObj.nextInt();
        int findLocationDelete = findLocationDelete(removeElement, arraySize, listNumber);
        listNumber[findLocationDelete] = removeElement;
    }
    
    public static int findLocationDelete(int removeElement, int arraySize, int[] listNumber){
        for (int i = 0; i <= arraySize -1; i++) {
            if (removeElement == listNumber[i]) {
            } else if (i == arraySize -1) {
                System.out.println("Element " + removeElement + " is not in the array.");
            } 
        }
        return 0;
        
    }
    
    // Option 3: Traverse the array
    
    public static void traverse(int arraySize, int[] listNumber){
        
        for (int i = 0; i <= arraySize -1 ; i++) {
            if (listNumber[i] == 0) {
                System.out.println("The array is empty.");
                return;
            } else {
                break;
            }
        }
        
        Arrays.sort(listNumber);
        int upperBound = arraySize - 1;
        System.out.print("The elements of the array:");
        for (int i = 0; i <= upperBound; i++){
            System.out.print(" " + listNumber[i] + " ");
        }
    }  
    
    
    // Main Menu
    
    public static void mainMenu(int arraySize, int[] listNumber){
        System.out.println("\n\nArray Basic Operations \n 1. Insert a value \n 2. Delete a value \n 3. Traverse the array \n 4. Exit");
        System.out.print("\nEnter your choice: ");
        Scanner myObj = new Scanner(System.in);
        int userChoice = myObj.nextInt();
        
        switch (userChoice) {
            case 1:
            insertItem(arraySize, listNumber);
            mainMenu(arraySize, listNumber);
                break;
            case 2:
            deleteItem(arraySize, listNumber);
            mainMenu(arraySize, listNumber);
                break;
            case 3:
            traverse(arraySize, listNumber);
            mainMenu(arraySize, listNumber);
                break;
            case 4:
                break;
                
            default:
                 System.out.println("Please choose an option from the list below.");
                 mainMenu(arraySize, listNumber);
        }
    }
    
    public static void main(String[] args){
        Scanner myObj = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int arraySize = myObj.nextInt();
        int listNumber[] = new int[arraySize];
        
        for (int i = 0 ; i <= arraySize-1 ; i++) {
            listNumber[i] = 0;  
        }
        
        mainMenu(arraySize, listNumber);
    }
}
