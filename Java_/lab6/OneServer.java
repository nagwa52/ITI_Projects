import java.io.*;
import java.net.*;


public class OneServer {

    ServerSocket myServerSocket;
    Socket s;
    DataInputStream dis;
    PrintStream ps;


    public static void main(String[] args) {
        new OneServer();
    }


    public OneServer() {
        try {
            myServerSocket = new ServerSocket(8000);
            s = myServerSocket.accept();
            dis = new DataInputStream(s.getInputStream());
            ps = new PrintStream(s.getOutputStream());
            String msg = dis.readLine();
            System.out.println(msg);
            ps.println("Data Received");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        try 
		{
            ps.close();
            dis.close();
            s.close();
            myServerSocket.close();
        } 
		catch (Exception ex) {
            ex.printStackTrace();
        }
    }


}