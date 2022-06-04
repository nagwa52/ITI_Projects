import java.io.*;
 

public class MTangle
{

    public static void printStar(int n)
    {
        int i, j;

        for(i=0; i<n; i++)
        {

            for(j=0; j<=i; j++)
            {
                // printing stars
                System.out.print("*");

            }

                    System.out.print("\t\t");

           for (j=n-i; j>1; j--)
            {
                // printing spaces
                System.out.print(" ");
            }

           for(j=0; j<=i; j++)
            {
                // printing second triangle

                System.out.print("* ");


            }
 

            System.out.println();
        }
   }
 
    // Driver Function
    public static void main(String args[])
    {
        int n = 6;
        printStar(n);
    }
}