public class SPLIT {
    public static void main(String args[])
    {
        String str = "163.121.12.30";
        String[] arrOfStr = str.split("\\.");
 
        for (String a : arrOfStr)
            System.out.println(a);
    }
}