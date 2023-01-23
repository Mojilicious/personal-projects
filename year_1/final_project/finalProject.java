import java.util.*; //library
    
public class finalProject {
    public static void main(String args[]) {
        //declare Scanner
        Scanner scan = new Scanner(System.in);
        //declare Variables
        int callDuration, //total duration of the call
            transactionCost = 20, //total transaction cost
            minDuration = 3, //minimum duration before additional fees
            ratePrelim = 20, //preliminary, the base fee incurred
            rateSec = 4; //secondary, additional fees incurred
        //user input
        System.out.println("Enter the amount of minutes you spent in the call:");
        callDuration = scan.nextInt();
        scan.close(); //closes Scanner
        //calculation
        if (0 < callDuration && callDuration <= minDuration) { //possibility 1: equal to or less than 3 minutes
            transactionCost = ratePrelim;}
            else if (callDuration > minDuration) //possibility 2: more than three minutes
                {transactionCost = ratePrelim + (rateSec * (callDuration - minDuration));
                }
            else {System.out.println("Value entered is invalid. Please input a positive real number and try again.");
                {return;}} //closes program if value entered is invalid
        //display
        System.out.println("Please deposit Php" + transactionCost + " to settle your balance. Thank you!");
    } //end of main
} //end of class