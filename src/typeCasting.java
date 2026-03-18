import java.util.Arrays;
import java.util.Scanner;

public class typeCasting {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
    // FLOAT >> INTEGER
    // IF I ASK FOR FLOAT AND GIVING INTEGER, IT WILL WORK(FLOAT>INT)
    //YOU CAN ASK FOR MORE AND GIVE SMALL, BUT NOT VICE VERSA.

//        float num = input.nextInt();

        // I CAN NOT DO THIS CUZ IN L.H.S ITS SMALLER AND IN R.H.S ITS BIGGER
//        int num = input.nextFloat();
    // HERE IT IS ASKING FLOAT BUT I CAN GIVE INTEGER ALSO CUZ INT<FLOAT.
//        float num = input.nextFloat();

        // typecasting
//        int num = (int)(56.67f);
//
     // MAXIMUM VALUE WE CAN PUT INTO A BYTE IS 256.
        int a = 257;
        byte b = (byte)(a); // 257 % 256 = remainder(1), so the output would be 1.
        System.out.println(b);




    }
}
