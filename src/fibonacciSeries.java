import java.util.Scanner;


public class fibonacciSeries {
    public static void main (String[] args){
        Scanner in = new Scanner (System.in);
        int n = in.nextInt();
        int prev_value = 0; // previous number i.e 1st number
        int curr_value = 1; // current number i.e  2nd number
        int count = 2 ; // so prev_value and curr_value are net 2 values

        while(count<=n){
            int temp = curr_value; // here temp stores the old value of curr_value not updated value
            curr_value = curr_value + prev_value;
            prev_value = temp;
            count ++;
        }

        System.out.println(curr_value);



    }
}
