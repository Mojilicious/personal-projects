import java.util.*;

public class nodesTest {
    public String firstName;
    public String middleName; 
    public String lastName; 
    public String sex; 
    public int age;
    public int areaCode; 
    public long telephoneNumber; 
    public nodesTest next;
    public static nodesTest firstNode;
    public static nodesTest lastNode = null;
    
    public nodesTest (nodesTest n, String f, String m, String l, int ac, long t, String s, int a){
        firstName = f;
        middleName = m;
        lastName = l;
        areaCode = ac;
        telephoneNumber = t;
        sex = s;
        age = a;
        next = n;
    }
    
    public static void main(String[] args) {
        int numnodes, ac, a;
        long t;
        String f, m, l, s, throwAway;
        System.out.print("How many nodes do you want to input?: ");
        Scanner userInput = new Scanner(System.in);
        numnodes = userInput.nextInt();
        for (int i=0; i<numnodes;i++) {
            System.out.println("-- Kindly give the information of member " + (i+1) + " --");
            throwAway = userInput.nextLine();
            
            System.out.print("Enter first name: ");
            f = userInput.nextLine();
            
            System.out.print("Enter middle name: ");
            m = userInput.nextLine();
            
            System.out.print("Enter last name: ");
            l = userInput.nextLine();
            
            System.out.print("Enter sex: ");
            s = userInput.nextLine();
           
            System.out.print("Enter age: ");
            a = userInput.nextInt();
            
            System.out.print("Enter area code (XXX): ");
            ac = userInput.nextInt();
            
            System.out.print("Enter telephone number (XXX-XXXX): ");
            t = userInput.nextLong();
            
            nodesTest n = new nodesTest (null, f, m, l, ac, t, s, a);
            if (lastNode!=null){
                lastNode.next = n;
                lastNode = n;
            }
            else {
                firstNode = n;
                lastNode = n;
            }
        }

        System.out.println("\n Here are the entered nodes: \n");
        
        nodesTest n = firstNode;
        
        while(n!=null) {
                System.out.println("Welcome to the club " + n.firstName + " " + n.middleName + " " + n.lastName + "!" + 
                "\nYour area code and telephone number is (" + n.areaCode + ") " + n.telephoneNumber + 
                ".\nYou are a " + n.sex + " member, and your age is " + n.age + "\n.");
                n = n.next;
        }
        
    }
    
    
    
}
