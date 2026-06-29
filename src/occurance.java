import java.util.Scanner;


public class occurance {
    public static void main(String[] args){
//        Scanner in = new Scanner(System.in);

        int n = 133343;

        int count = 0;

        while(n>0){
            int rem = n % 10;

            if(rem==3){
                count++;

            }
            n= n / 10;



            }
        System.out.println(count);
        }




    }
