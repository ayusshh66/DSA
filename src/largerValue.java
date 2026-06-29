import java.util.Scanner;

public class largerValue {
    public static void main (String[] args){
        Scanner input = new Scanner(System.in);

        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();
//
//        int max = a;
//
//        if (b>max){
//            max = b ;
//        }
//        if(c>max){
//            max = c;
//        }
//
//        else{
//            System.out.println("ggs");
//
//        }
//
//        System.out.println("the greater among them is : "+  max);

        int max = Math.max(a, Math.max(b,c));
        System.out.println(max);


    }
}
