import java.util.Scanner;

public class input {
    public static void main(String[] args){
//        System.out.print("Please enter you age :     ");
     Scanner input = new Scanner(System.in);
//        int age = input.nextInt();
//        System.out.println("Your age is " +     age);

        // we can use "_" instead of "," for representing number
    //       int num = 65_30_0_0_0;
//        System.out.println(num);
       // the floating is not accurate .
        float fl = input.nextFloat();
        System.out.println(fl);

    }
}
