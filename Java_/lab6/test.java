import java.util.*;
import java.awt.*;
public class test{
    public static void main(String args[]) {
  int x =10;
    int y = 0;
    int result;
    try{
        Scanner sc = new Scanner(System.in);
         System.out.println("x");
        x= sc.nextInt();
         System.out.println("y");
        y= sc.nextInt();
        result = x/y;
          System.out.println(result);
    }
    catch(Exception e){
        System.out.println(e);
  // System.Out.println(e);
    }
   

}
   
}