import java.io.FileOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.lang.NullPointerException;
public class FileOut{
    public static void main(String args []){
        FileWriter filewriter =null;
        PrintWriter printwriter =null;
        try{
            filewriter = new FileWriter("sample.txt",true);
            printwriter = new PrintWriter (filewriter);
            printwriter.println();
            for(String data :args){
                printwriter.println(data);
            }

        }
        catch(IOException ex){
            ex.printStackTrace();
        }
        finally{
            try{
                printwriter.close();
                filewriter.close();
            }
            catch(IOException ex){
            ex.printStackTrace();
        }
        }
    }
}