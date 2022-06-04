import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
public class FileInput{
    public static void main(String args[]){
        try{
FileInputStream fis = new FileInputStream("sample.txt");
			int size = fis.available();
			byte[] b = new byte[size];
			fis.read(b);
			System.out.println(new String(b));
			fis.close();
        }
       catch(FileNotFoundException exception)
{
    System.out.println("The file was not found.");
}
catch(IOException exception)
{
    System.out.println(exception);
}
    }
}