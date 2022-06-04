import java.io.*;
import java.net.*;
public class OneClient {
Socket mySocket;
DataInputStream dis;
PrintStream ps;


    public static void main(String[] args) {
        new OneClient();
    }

   
public OneClient(){
    try{
        mySocket = new Socket("127.0.0.1",8000);
        dis = new DataInputStream(mySocket.getInputStream());
        ps = new PrintStream(mySocket.getOutputStream());

       

    }
    catch (IOException ex) {
            ex.printStackTrace();
        }
  
}
public void run{
    while(true){
        String replyMsg = dis.readLine();
        ta.append(replyMsg+"\n");
    }
}
}