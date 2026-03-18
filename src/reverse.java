public class reverse {
    public static void main(String[] args){
        int n = 2345;

        String s= "";

        while(n>0){
            int rem = n % 10;
            s = s + rem;
            n = n/10;


        }
        System.out.println(s);

    }

}
