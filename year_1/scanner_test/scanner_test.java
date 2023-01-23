import java.util.Scanner;

public class scanner_test {
	public static void main(String args[]) {
        Scanner nameInput = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = nameInput.nextLine();

        Scanner addressInput = new Scanner(System.in);
        System.out.println("Enter your address: ");
        String address = addressInput.nextLine();

        Scanner ageInput = new Scanner(System.in);
        System.out.println("Enter your age: ");
        String age = ageInput.nextLine();
        
        System.out.println("Your name is: " + name);
        System.out.println("Your address is: " + address);
        System.out.println("Your age is: " + age);

        nameInput.close();
        addressInput.close();
        ageInput.close();
	}
}