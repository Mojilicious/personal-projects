import java.util.Scanner;
public class datatypeTest {
	public static void main(String args[]) {
        
        Scanner stringInput = new Scanner(System.in);
        System.out.println("Enter a string: ");
        String stringValue = stringInput.nextLine();

        Scanner characterInput = new Scanner(System.in);
        System.out.println("Enter a character: ");
        char characterValue = characterInput.next().charAt(0);

        Scanner floatInput = new Scanner(System.in);
        System.out.println("Enter a float: ");
        float floatValue = floatInput.nextFloat();
        
        Scanner doubleInput = new Scanner(System.in);
        System.out.println("Enter a double: ");
        double doubleValue = doubleInput.nextDouble();

        Scanner booleanInput = new Scanner(System.in);
        System.out.println("Enter a boolean: ");
        boolean booleanValue = booleanInput.nextBoolean();

        System.out.println("String: " + stringValue);
        System.out.println("Character: " + characterValue);
        System.out.println("Float: " + floatValue);
		System.out.println("Double: " + doubleValue);
		System.out.println("Boolean: " + booleanValue);

        stringInput.close();
        characterInput.close();
        floatInput.close();
		doubleInput.close();
		booleanInput.close();

	}
}